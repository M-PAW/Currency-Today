const testRoutes = require('express').Router();
const localData = require('../localData/localData');

testRoutes.post('/default', (req,res) => {
    // Requires a sessionId
    console.log(req.body.sessionId);
    res.status(200).send(localData.default_currency)
})

testRoutes.get('/count', (req,res) => {
    console.log('Online Count Test');
})

testRoutes.post('/new', (req,res) => {
    // Requires a sessionId
    console.log(req.body.sessionId);
    res.status(200).send({
        limitCounter:2,
        baseCode:"AUD",
        conversionRates: {
        "AUD": 1,
        "AED": 2.7501,
        "AFN": 59.9041,
        "ALL": 78.2255,
        "AMD": 357.7400,
        "ANG": 1.3404,
        "AOA": 452.0540,
        "ARS": 74.4196,
        }
    })
})

testRoutes.post('/create', (req,res) => {
    console.log(req.body.appCode);
    res.status(200).send({
        sessionId: 12345,
        limitCounter: 0,
        supportedCodes: localData.supported_codes
    })
})

module.exports = testRoutes;