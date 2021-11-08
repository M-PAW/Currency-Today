const codesModel = require('../models/codesModel');
const axios = require('axios');
const localData = require('../localData/localData');
const checkSupportedCodes = () => {
    codesModel.findOne({codesId:process.env.CODES_ID}, (err,codes) => {
        if (err | !codes) {
            console.log('Supported_Codes Not Found... \nGetting Supported_Codes...');
            axios.get(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/codes`)
            .then(codes => {
                const formattedCodes = codes.data.supported_codes.map(code => {
                    return [
                        code[0],
                        code.join(' - ')
                    ]
                })
                const codesObject = {
                    codeId:process.env.CODES_ID,
                    supported_codes: formattedCodes
                }
                codesModel.create([codesObject], (err,success) => {
                    if (err | !success) {
                        return console.log(`index:axio:codeModel.create: ${err}`);
                    }
                    else {
                        localData.supported_codes = success.supported_codes;
                        return console.log(`Supported_Codes Ready`);
                    }
                })
            })
            .catch(err => console.log(`index:mongoose.connect:axios: ${err}`))
        }
        else {
            localData.supported_codes = codes.supported_codes;
            return console.log('Supported_Codes Ready');
        }
    })
}
module.exports = checkSupportedCodes;