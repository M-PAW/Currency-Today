const sessionModel = require('../models/sessionModel');
const getCount = (sessionId, callback) => {
    sessionModel.findOne({sessionId}, (err, session) => {
        if (err | !session) {
            console.log(`getCount: ${err}`);
        }
        else {
            callback(null,session.limitCounter)
        }
    })
}
module.exports = getCount;