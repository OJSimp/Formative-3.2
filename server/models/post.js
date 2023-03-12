const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
 firstname: {type: String, required: true},
 lastname: {type: String, required: true},
 imageUrl: {type: String, required: true},
 portfolioUrl: {type: String, required: true},
 // creationDate: {type: Date, required: true},
 // editedDate: {type: Date,}


})




module.exports = mongoose.model("Post", postSchema)