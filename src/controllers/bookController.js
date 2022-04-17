const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const newBookModel=require("../models/newbookModel")
const newpublishermodel=require("../models/newPublisherModel")
const newauthormodel=require("../models/newAuthorModel")
const { updateLocale } = require("moment")

const createBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}
const createnewBook= async function (req, res) {
    let data= req.body

    
    const pub = await newpublishermodel.find({_id:data.publisher})

      
     if (pub.length> 0)
     {
     let aut = await newauthormodel.find({_id: data.author})

        
          if (aut.length >0) {

             let bookCreated = await newBookModel.create(data)
               res.send({data: bookCreated})
          }
          else{ res.send( "author doesnt exist")}

     }
    else {  res.send("no such publisher exist")}
}

const books= async function (req, res)
{   const a= await newBookModel.updateMany({isHardcover:false})

    const hardcover=await newpublishermodel.find({$or:[{name:"Penguins"},{name:"Harper collins"}]}).select({_id:1})
    const update=await newBookModel.updateMany({publisher:hardcover},{isHardcover:true})


  let b=await newauthormodel.find({rating:{$gt:3.5}}).select({_id:1})
  let ab=await newBookModel.updateMany({author:b},{$inc:{price: 10}})

  res.send({msg: update, ab})


}
    
  






const getLibraryBooks= async function(req,res){
 
    let specificBook = await newBookModel.find().populate('author').populate('publisher')
    res.send({data: specificBook})

}













module.exports.books=books
module.exports.getLibraryBooks=getLibraryBooks
module.exports.createnewBook= createnewBook
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
