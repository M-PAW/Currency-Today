const axios = require('axios');
const getDefaultCurrency = require('../helpers/getDefaultCurrency');
const currency = {
    defaultCurrency: (req,res) => {
        if (!req.body.sessionId | req.body.sessionId === undefined) {
            return res.status(401).send('Unauthorized');
        }
        const {sessionId} = req.body;
        getDefaultCurrency((sessionId), (err,data) => {
            res.status(200).send({defaultCurrency: data})
        })
    },
}
module.exports = currency;