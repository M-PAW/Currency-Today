const sessionRoutes = require('express').Router();
const session = require('../controllers/session');
sessionRoutes.get('/', (req,res) => {
    res.send('Session Online')
})

sessionRoutes.get('/create',session.create)
sessionRoutes.get('/count', session.count)

module.exports = sessionRoutes;