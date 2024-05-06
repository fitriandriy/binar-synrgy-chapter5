const express = require('express');
const router = express.Router();
const { getPeople, getPeopleById, createData, updateData, deleteData } = require('../services/peopleService');
const { checkId } = require('./helper/index')

router.get('/', getPeople);
router.post('/', createData);
router.get('/:id', checkId, getPeopleById);
router.put('/:id', checkId, updateData);
router.delete('/:id', checkId, deleteData);

module.exports = router;
