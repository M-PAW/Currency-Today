const mongoose = require('mongoose');
const checkSupportedCodes = require('./checkSupportedCodes');
const checkDefaultCurrency = require('./checkDefaultCurrency');
const connectDB = () => {
    mongoose.connect(process.env.DB_URI,{ 
        useNewUrlParser: true, 
        useUnifiedTopology: true},(err) => {
            if (err) return console.log(`index:mongoose.connect: ${err}`);
            else {
                console.log('DB Connected Successfully');
                // Check DB for currency-codes, get & insert if not found
                checkSupportedCodes();
                //checkDefaultCurrency();
                // set refresh for default data, 24h
                //setInterval(checkDefaultCurrency, 86400001)
            }
    })
}
module.exports = connectDB;