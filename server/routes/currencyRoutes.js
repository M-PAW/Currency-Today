const currencyRoutes = require('express').Router();
const currency = require('../controllers/currency');

currencyRoutes.get('/',currency.defaultCurrency)
currencyRoutes.get('/new',currency.newCurrency)

module.exports = currencyRoutes;