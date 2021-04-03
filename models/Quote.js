const mongoose = require('mongoose')
const Schema = mongoose.Schema;

// Create Scheme 

const QuoteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    quote: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    }
})

module.exports = Quote = mongoose.model('quote', QuoteSchema)