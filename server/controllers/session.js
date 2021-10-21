const createSession = require('../helpers/createSession');
const incrementCounter = require('../helpers/incrementCounter');
const getCount = require('../helpers/getCount');
const sessionModel = require('../models/sessionModel');

const session = {
    create: (req,res) => {
        if (req.body.appCode === undefined | req.body.appCode !== process.env.APP_CODE) {
            res.status(401).send('Unauthorized');
        }
        else {
            createSession((err,session) => {
                if (err) res.status(400).send(err)
                else res.status(201).send(session)
            })
        }
    },
    increment: (req,res) => {
        if (!req.body.sessionId | req.body.sessionId === undefined) return res.status(401).send('Unauthorized');
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
    },
    count: (req,res) => {
        if (!req.body.sessionId | req.body.sessionId === undefined) return res.status(401).send('Unauthorized');
        const {sessionId} = req.body;
        getCount((sessionId), (err,count) => {
            if (err !== null | !count) console.log(`count:getCount: ${err}`);
            else res.status(200).send({limitCounter:count})
        })
    }
}
module.exports = session;