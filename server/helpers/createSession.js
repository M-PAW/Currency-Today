const uuid = require('short-uuid');
const jwt = require('jsonwebtoken');
const sessionModel = require('../models/sessionModel');
const localData = require('../localData/localData');
const createSession = (callback) => {
    const newId = uuid.generate();
    const session = jwt.sign({newId}, process.env.JWT_SECRET);

    // create sessionObject
    const sessionObject = {
        sessionId: session,
        limitCounter:0,
        supportedCodes:localData.supported_codes
    }
    // insert into DB
    sessionModel.create(sessionObject, (err,success) => {
        if (err | !success) {
            console.log(`createSession: ${err}`);
        }
    })

    callback(null,sessionObject);
}
module.exports = createSession;