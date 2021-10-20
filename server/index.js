require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan')
const mongoose = require('mongoose');
const codesModel = require('./models/codesModel');
const axios = require('axios');
const localData = require('./localData/localData');
// Connect DB
mongoose.connect(process.env.DB_URI,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true},(err) => {
        if (err) return console.log(`index:mongoose.connect: ${err}`);
        else {
            console.log('DB Connected Successfully');
            // Check DB for currency-codes, get & insert if not found
            codesModel.findOne({codesId:process.env.CODES_ID}, (err,codes) => {
                if (err | !codes) {
                    console.log('Supported_Codes Not Found... \nGetting Supported_Codes...');
                    axios.get(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/codes`)
                    .then(codes => {
                        const codesObject = {
                            codeId:process.env.CODES_ID,
                            supported_codes: codes.data.supported_codes
                        }
                        codesModel.create([codesObject], (err,success) => {
                            if (err | !success) {
                                return console.log(`index:axio:codeModel.create: ${err}`);
                            }
                            else {
                                localData.supported_codes = success.supported_codes;
                                console.log(`Support: ${localData.supported_codes.slice(0,5)}`);
                                return console.log(`Supported_Codes Ready`);
                            }
                        })
                    })
                    .catch(err => console.log(`index:mongoose.connect:axios: ${err}`))
                }
                else {
                    localData.supported_codes = codes.supported_codes;
                    console.log(`Support: ${localData.supported_codes.slice(0,5)}`);
                    return console.log('Supported_Codes Ready');
                }
            })
        }
})

// Set dynamic port for local or server
const PORT = process.env.PORT || 5500;

// Configure Express
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(helmet());
app.use(morgan('dev'));
// equip cors, set whitelist later
app.use(cors());

// Setup Router
const router = require('./routes/router');
app.use('/', router)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})