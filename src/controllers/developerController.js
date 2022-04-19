
const batchmodel = require("../models/batchmodel")
const developerModel=require("../models/developerModel")



const createDeveloper=async function(req,res){
    let developer=req.body
    let developercreated=await developerModel.create(developer)
    res.send({data:developercreated})
}

const scolarshipDeveloper=async function(req,res){
    
    let deserved=await developerModel.find({gender:"female",percentage:{$gte:70}}).populate('batch')
    res.send({data:deserved})
}
const developers=async function(req,res){
    let data=req.query
    let batchname=data.program
    let reqpercent=data.percentage
    let reqbatch=await batchmodel.find({name:batchname}).select({_id:1})
    
    let result= await developerModel.find({percentage:{$gte:reqpercent},batch:reqbatch}).populate('batch')
    res.send({data:result})
}





module.exports.developers=developers
module.exports.scolarshipDeveloper=scolarshipDeveloper
module.exports.createDeveloper=createDeveloper
