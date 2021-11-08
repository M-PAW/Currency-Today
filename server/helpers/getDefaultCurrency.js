const sessionModel = require('../models/sessionModel');
const localData = require('../localData/localData');
const getDefaultCurrency = (sessionId, callback) => {
    sessionModel.findOne({sessionId}, (err,found) => {
        if (err | !found) {
            console.log(`getDefaultCurrency:findOne: ${err}`);
        }
        else {
            callback(null,localData.default_currency)
        }
    })
}

module.exports = getDefaultCurrency;