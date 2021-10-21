const axios = require('axios');
const localData = require('../localData/localData');
const checkDefaultCurrency = () => {
    axios.get(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`)
    .then(currencyData => {
        console.log(`Getting Default-Currency-Rates...`);
        localData.default_currency = {
            base_code: currencyData.data.base_code,
            conversion_rates: currencyData.data.conversion_rates
        }
        return console.log(`Default-Currency-Rates Ready`);
    })
    .catch((err) => {
        console.log(`checkDefaultCurrency:axios: ${err}`);
    })
}
module.exports = checkDefaultCurrency;