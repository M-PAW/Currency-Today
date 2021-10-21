const currencyRoutes = require('express').Router();
const currency = require('../controllers/currency');

currencyRoutes.get('/',currency.defaultCurrency)

module.exports = currencyRoutes;