const createSession = require('../helpers/createSession');
const incrementCounter = require('../helpers/incrementCounter');
const getCount = require('../helpers/getCount');
const sessionModel = require('../models/sessionModel');

const session = {
    create: (req,res) => {
        console.log(req.body.appCode);
        if ( toString(req.body.appCode) !== toString(process.env.APP_CODE)) {
            res.status(401).send('Unauthorized APP CODE');
        }
        else {
            console.log("Else Hit");
            createSession((err,session) => {
                if (err) res.status(400).send(err)
                else res.status(201).send(session)
            })
        }
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