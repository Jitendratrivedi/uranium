
const batchModel=require("../models/batchmodel")



const createBatch=async function(req,res){
    let batch=req.body
    let batchcreated=await batchModel.create(batch)
    res.send({data:batchcreated})
}


module.exports.createBatch=createBatch
