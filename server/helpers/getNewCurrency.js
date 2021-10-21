const axios = require('axios');
const getNewCurrency = (currency, callback) => {
    axios.get(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${currency}`)
    .then(response => {
        callback(null,{
            base_code: response.data.base_code,
            conversion_rates: response.data.conversion_rates
        })
    })
    .catch((err) => {
        console.log(`getNewCurrency:axios: ${err}`);
    })
}
module.exports= getNewCurrency;
