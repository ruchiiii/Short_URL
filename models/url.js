const mongoose = require("mongoose")

urlSchema = new mongoose.Schema({

    shortUrl: {
        type: String,
        required: true,
        Unique: true
    },
    redirectUrl: {  
        type: String,
        required: true
    },
    visitHistory: [{
        timestamp: { type: Date, default: Date.now }
    }],
},
    { timestamps: true}

);

const URL = mongoose.model('Url', urlSchema);
module.exports = URL;