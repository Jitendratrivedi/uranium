
const newAuthorModel = require("../models/newAuthorModel")





const createnewAuthor=async function(req,res){
    let newAuthor=req.body
    let newAuthorcreated=await newAuthorModel.create(newAuthor)
    res.send({data:newAuthorcreated})
}


module.exports.createnewAuthor=createnewAuthor
