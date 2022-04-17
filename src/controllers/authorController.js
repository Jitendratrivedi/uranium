const AuthorModel= require("../models/authorModel")
const newAuthorModel = require("../models/newAuthorModel")


const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await AuthorModel.find()
    res.send({data: authors})
}
const createnewAuthor=async function(req,res){
    let newAuthor=req.body
    let newAuthorcreated=await newAuthorModel.create(newAuthor)
    res.send({data:newAuthorcreated})
}


module.exports.createnewAuthor=createnewAuthor
module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData