const express = require('express');
const router = express.Router();
const PeopleRouter = require('./peopleRouter')
const views = require('./views')

router.use('/people', PeopleRouter)
router.use('/views', views)

module.exports = router