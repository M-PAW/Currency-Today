const sessionModel = require('../models/sessionModel');
const incrementCounter = (sessionId,callback) => {
    sessionModel.findOne({sessionId}, (err,session) => {
        let limitCounter = session.limitCounter;
        if (err | !session) console.log(`incrementCount(findOne): ${err}`);
        if (session.limitCounter >= process.env.API_LIMIT) {
            callback(null,false)
        }
        else {
            limitCounter += 1;
            sessionModel.findOneAndUpdate({sessionId},{limitCounter}, (err,success) => {
                if (err | !success) console.log(`incrementCount(findOneAndUpdate: ${err})`);
                else callback(null,true)
            })
        }
    })
}
module.exports = incrementCounter;