const express = require('express');
const router = express.Router();
const { getPeople, getPeopleById, createData, updateData, deleteData, uploadImagePeople } = require('../services/peopleService');
const { checkId } = require('./helper/index')
const upload = require('../middlewares/uploadHandler')

router.get('/', getPeople);
router.post('/', createData);
router.get('/:id', checkId, getPeopleById);
router.put('/:id', checkId, updateData);
router.delete('/:id', checkId, deleteData);
router.post('/upload', upload.single('image'), uploadImagePeople)

module.exports = router;
