const express = require('express')
const mongoose = require('mongoose')
const BASE_URL = 'mongodb://localhost:27017/xharktank'

const app = express()

mongoose.connect(BASE_URL,{useNewUrlParser:true})
const connection = mongoose.connection

//firing an open event
connection.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const pitchRouter = require('./routes/pitches')

//middleware
app.use('/', pitchRouter)

app.listen(8081, () => {
    console.log('Server started')
})

