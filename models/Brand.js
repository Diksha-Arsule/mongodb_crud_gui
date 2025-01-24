const { ServerDescription } = require('mongodb')
const mongoose = require('mongoose')

// Define the Schema for the Brand

const brandSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    description: String
});

module.exports = mongoose.model('Brand', brandSchema);