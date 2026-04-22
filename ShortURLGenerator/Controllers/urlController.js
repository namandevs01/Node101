const { nanoid } = require('nanoid');
const urlModel = require('../models/urlModel');

const generateShortUrl = async (req, res) => {
    const {actualUrl} = req.body;
    if(!actualUrl){
        return res.status(400).json({error: "URL is required"});
    }
    const shortUrl = nanoid(7);

    // await urlModel.create({ shortUrl,actualUrl });
    await urlModel.create({
        actualUrl: actualUrl,
        shortUrl: shortUrl
    });
    return res.status(200).json({success: true, shortUrl});
}

module.exports = { generateShortUrl };