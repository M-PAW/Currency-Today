require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan')
const connectDB = require('./DB/connectDB');
// Connect DB
connectDB();

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