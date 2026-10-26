
const nanoid = require('nanoid');
const URL = require('../models/url.js');

async function HandleGenerateNewShortUrl(req, res) {
    const body = req.body;
    if (!body.url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    const newShortUrl = nanoid.nanoid(8); // generate a unique short URL with 8 characters
    await URL.create({
        shortUrl: newShortUrl,
        redirectUrl: body.url,
        visitHistory: []
    })

    return res.render(('home'), { id: newShortUrl });
    
}

async function HandleGetAnalytics(req, res) {
    const shortUrl = req.params.shortUrl;
    const url = await URL.findOne({ shortUrl: shortUrl });
    return res.json(
        {
            totalClicks: url.visitHistory.length,
            analytics: url.visitHistory,
        }
    );

}
module.exports = { HandleGenerateNewShortUrl, HandleGetAnalytics };