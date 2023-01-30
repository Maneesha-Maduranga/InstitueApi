const  { getAllInstitute,getSingleInstitute,postInstitute,deleteInstitute,updateInstitute} = require('../controllers/institute')
const {protect} = require('../middleware/authmiddleware')
//Class Routes for get,post,update,delete

const express = require('express');

const router = express.Router();


//Include Other Resourse Router 
const course = require('./course')

router.use('/:instituteId/course', course)



//Public
router.get('/', getAllInstitute);

//Private
router.get('/:id', protect,  getSingleInstitute);

//Private
router.post('/',protect ,postInstitute);

//Private
router.patch('/:id',protect ,updateInstitute);

//Private
router.delete('/:id',protect ,deleteInstitute);


module.exports = router;

