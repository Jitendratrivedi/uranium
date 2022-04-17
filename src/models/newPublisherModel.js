const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    
    name: String,
    
    address:String

}, { timestamps: true });

module.exports = mongoose.model("Newpublisher", authorSchema)

