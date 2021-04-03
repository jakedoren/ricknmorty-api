const express = require('express')
const router = express.Router();

// Quote model
const Quote = require('../../models/Quote')
const url = require('url');
const querystring = require('querystring');




router.get('/:id', (req, res) => {
    Quote.findById(req.params.id)
        .then(quote => res.json(quote))
        .catch(err => res.status(404).json({message: 'id not found'}))
})

// Queried request / ALL

router.get('/', (req, res) => {
    let parsedUrl = url.parse(req.url)
    let parsedQs = querystring.parse(parsedUrl.query)
    console.log(parsedQs);

    if(parsedQs.name){
        Quote.find({ "name": {"$regex": parsedQs.name, "$options": "i"}})
        .then(quote => res.json(quote))
        .catch(err => res.status(404).json({message: 'name not found'}))
    } else if(parsedQs.quote) {
    Quote.find({ "quote": {"$regex": parsedQs.quote, "$options": "i"}})
        .then(quote => res.json(quote))
        .catch(err => res.status(404).json({message: 'quote not found'}))
    } else {
        Quote.find()
        .then(quote => res.json(quote))
        .catch(err => res.status(404).json({message: 'no quotes found'}))
    }
})

module.exports = router

