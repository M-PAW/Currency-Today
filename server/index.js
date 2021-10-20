require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan')
const mongoose = require('mongoose');

// Connect DB
mongoose.connect(process.env.DB_URI,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true},(err) => {
    if (!err) return console.log('DB Connected Successfully');
    console.log(err);
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

app.get('/', (req,res) => {
    console.log(" '/' hit");
    res.send("Online")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})