const currency = require('express').Router();

currency.get('/', (req,res) => {
    res.send('Currency Online')
})

module.exports = currency;