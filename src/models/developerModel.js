const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId


const developerSchema = new mongoose.Schema( {
    name: String,
    percentage: Number,
    gender: {
        type: String,
        enum: ["female", "male","other"]
    },
    batch: {
        type:ObjectId,
        ref:"Batch"
    }

}, { timestamps: true });


module.exports = mongoose.model('Developer', developerSchema)
