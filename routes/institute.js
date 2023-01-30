const  { getAllInstitute,getSingleInstitute,postInstitute,deleteInstitute,updateInstitute} = require('../controllers/institute')
const {protect,grant} = require('../middleware/authmiddleware')
//Class Routes for get,post,update,delete

const express = require('express');

const router = express.Router();


//Include Other Resourse Router 
const course = require('./course')
const review = require('./review')

router.use('/:instituteId/course', course)
router.use('/:instituteId/review', review)



//Public
router.get('/', getAllInstitute);

//Private
router.get('/:id', protect, grant(["publisher","admin"]),  getSingleInstitute);

//Private
router.post('/',protect,grant(["publisher","admin"]),postInstitute);

//Private
router.patch('/:id',protect,  grant(["publisher","admin"]),updateInstitute);

//Private
router.delete('/:id',protect, grant(["publisher","admin"]) ,deleteInstitute);


module.exports = router;

