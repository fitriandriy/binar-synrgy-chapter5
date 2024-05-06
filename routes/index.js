const express = require('express');
const router = express.Router();
const PeopleRouter = require('./peopleRouter')

router.use('/people', PeopleRouter)

module.exports = router