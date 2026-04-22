const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortUrl: {
        type:String,

    },
    actualUrl: {
        type: String,

    },
},{timestamps: true});

module.exports = mongoose.model('urlModel', urlSchema);