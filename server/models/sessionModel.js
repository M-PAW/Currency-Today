const mongoose = require('mongoose');

const schema = mongoose.Schema({
    sessionId:String,
    limitCounter:Number
})

const model = mongoose.model('Session', schema)

module.exports = model;