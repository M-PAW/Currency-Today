const sessionRoutes = require('express').Router();
const session = require('../controllers/session');

sessionRoutes.post('/create',session.create)
sessionRoutes.get('/count', session.count)

module.exports = sessionRoutes;