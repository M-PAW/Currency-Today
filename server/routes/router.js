const router = require('express').Router();

const sessionRoutes = require('./sessionRoutes');
const currencyRoutes = require('./currencyRoutes');

router.use('/session', sessionRoutes);
router.use('/currency', currencyRoutes);

module.exports = router;