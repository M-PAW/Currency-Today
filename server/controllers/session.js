const createSession = require('../helpers/createSession');
const incrementCounter = require('../helpers/incrementCounter')
const sessionModel = require('../models/sessionModel');
const session = {
    create: (req,res) => {
        createSession((err,session) => {
            if (err) res.status(400).send(err)
            else res.status(201).send(session)
        })
    },
    increment: (req,res) => {
        const {sessionId} = req.body;
        incrementCounter((sessionId), (err,success) => {
            if (err !==null | !success) console.log(`increment:incrementCounter: ${err}`);
            else {
                sessionModel.findOne({sessionId}, (err, session) => {
                    if (err | !session) {
                        console.log(`increment:findOne: ${err}`);
                    }
                    else {
                        res.status(201).send({limitCounter: session.limitCounter})
                    }
                })
            }

        })
    }
}

module.exports = session;