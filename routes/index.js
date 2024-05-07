const express = require('express');
const router = express.Router();
const PeopleRouter = require('./peopleRouter')
const ProductRouter = require('./productRouter')
const BookRouter = require('./bookRouter')
const views = require('./views')

router.use('/people', PeopleRouter)
router.use('/book', BookRouter)
router.use('/product', ProductRouter)
router.use('/views', views)

module.exports = router