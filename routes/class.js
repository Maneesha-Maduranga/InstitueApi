const  {getAllClass,getSingleClass,postClass,updateClass,deleteClass} = require('../controllers/class')

//Class Routes for get,post,update,delete

const express = require('express');

const router = express.Router();

//Public
router.get('/', getAllClass);

//Private
router.get('/:id', getSingleClass);

//Private
router.post('/', postClass);

//Private
router.patch('/:id', updateClass);

//Private
router.delete('/:id', deleteClass);


module.exports = router;

