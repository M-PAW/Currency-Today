const router = require('express').Router();

const sessionRoutes = require('./sessionRoutes');
const currency = require('./currencyRoutes');

router.use('/session', sessionRoutes);
router.use('/currency', currency);

module.exports = router;