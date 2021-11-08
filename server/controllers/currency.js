const axios = require('axios');
const getDefaultCurrency = require('../helpers/getDefaultCurrency');
const incrementCounter = require('../helpers/incrementCounter');
const getNewCurrency = require('../helpers/getNewCurrency');
const sessionModel = require('../models/sessionModel');
const currency = {
    defaultCurrency: (req,res) => {
        if (!req.body.sessionId ) {
            return res.status(401).send('Unauthorized');
        }
        const {sessionId} = req.body;
        getDefaultCurrency((sessionId), (err,defaultCurrency) => {
            res.status(200).send(defaultCurrency)
        })
    },
    newCurrency: (req,res) => {
        if (!req.body.sessionId
            | !req.body.currency) {
                return res.status(401).send('Unauthorized');
            }
            const {sessionId, currency} = req.body;
            incrementCounter((sessionId), (err,success) => {
                if (success) {
                    sessionModel.findOne({sessionId}, (err,found) => {
                        if (err | !found) {
                            console.log(`newCurrency:incrementCounter:findOne: ${err}`);
                        }
                        else {
                            const limitCounter = found.limitCounter;
                            getNewCurrency((currency), (err,currencyData) => {
                                return res.status(200).send({
                                    limitCounter:limitCounter,
                                    baseCode:currencyData.base_code,
                                    conversionRates:currencyData.conversion_rates
                                })
                            })
                        }
                    })

                }
                else return res.status(401).send('Unauthorized');
            })
    }
}
module.exports = currency;