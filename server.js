const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())

const quotes = require('./routes/api/quotes')


app.use(bodyParser.json())

const PORT = process.env.PORT || 8080;


app.listen(PORT, () => {
    console.log(`the server is running on port ${PORT}`)
})

//DB Config

const db = require('./config/keys').mongoURI;

//Connect to MongoDB

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true  })
    .then(() => console.log('MongoDB Connected'))
    .catch((err) => console.log(err))

// Use Routes

app.use('/api/quotes', quotes)