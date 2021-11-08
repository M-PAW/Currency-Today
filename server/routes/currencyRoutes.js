const currencyRoutes = require('express').Router();
const currency = require('../controllers/currency');

currencyRoutes.post('/',currency.defaultCurrency)
currencyRoutes.post('/new',currency.newCurrency)

module.exports = currencyRoutes;