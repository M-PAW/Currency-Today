const mongoose = require('mongoose');
const schema = mongoose.Schema({
    codeId:Number,
    supported_codes: Object([])
});
const model = mongoose.model('Code', schema);
module.exports = model;