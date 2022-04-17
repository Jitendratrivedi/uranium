const newPublisherModel= require("../models/newPublisherModel")

const createnewPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await newPublisherModel.create(publisher)
    res.send({data: publisherCreated})
}
module.exports.createnewPublisher=createnewPublisher
