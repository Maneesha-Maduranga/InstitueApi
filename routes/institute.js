const  { getAllInstitute,getSingleInstitute,postInstitute,deleteInstitute,updateInstitute} = require('../controllers/institute')

//Class Routes for get,post,update,delete

const express = require('express');

const router = express.Router();


//Include Other Resourse Router 
const course = require('./course')

router.use('/:instituteId/course', course)



//Public
router.get('/', getAllInstitute);

//Private
router.get('/:id', getSingleInstitute);

//Private
router.post('/', postInstitute);

//Private
router.patch('/:id', updateInstitute);

//Private
router.delete('/:id', deleteInstitute);


module.exports = router;

