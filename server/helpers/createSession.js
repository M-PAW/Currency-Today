const uuid = require('short-uuid');
const jwt = require('jsonwebtoken');
const sessionModel = require('../models/sessionModel');
const createSession = (callback) => {
    const newId = uuid.generate();
    const session = jwt.sign({newId}, process.env.JWT_SECRET);

    // create sessionObject
    const sessionObject = {
        sessionId: session,
        limitCounter:0
    }
    // insert into DB
    sessionModel.create(sessionObject, (err,success) => {
        if (err | !success) {
            console.log(`createSession: ${err}`);
        }
    })

    callback(sessionObject);
}
module.exports = createSession;