const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const newbookSchema = new mongoose.Schema( {
    name: String,
    author: {
        type: ObjectId,
        required:true,
        ref: "Newauthor"
    },
    price: Number,
    ratings: Number,
    publisher:
    {
        type:ObjectId,
        required:true,
         ref:"Newpublisher"

    },
   isHardcover:Boolean

}, { timestamps: true });


module.exports = mongoose.model('NewBook', newbookSchema)
