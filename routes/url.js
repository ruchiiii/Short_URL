
const express = require('express');
const URL = require('../models/url.js');
const {HandleGenerateNewShortUrl} = require('../controllers/url.js');
const {HandleGetAnalytics} = require('../controllers/url.js');



const router = express.Router();

router.post("/", HandleGenerateNewShortUrl);

router.get("/:shortUrl", async (req, res) => {
    const shortUrl = req.params.shortUrl;
    const url = await URL.findOneAndUpdate({ shortUrl: shortUrl }, {
        $push:
            { visitHistory: { timestamp: Date.now() } }
    });
    res.redirect(url.redirectUrl);
});

router.get('/analytics/:shortUrl', HandleGetAnalytics);


module.exports = router;