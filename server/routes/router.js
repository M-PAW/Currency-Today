const router = require('express').Router();

const sessionRoutes = require('./sessionRoutes');
const currencyRoutes = require('./currencyRoutes');
const testRoutes = require('./testRoutes');

router.use('/session', sessionRoutes);
router.use('/currency', currencyRoutes);
router.use('/test', testRoutes);

module.exports = router;