const express = require('express')
const {addCourse,getCourse,getSingleCourse,updateCourse,deleteCourse} = require('../controllers/course')
const {protect} = require('../middleware/authmiddleware')

const router = express.Router({mergeParams:true})


router.post('/',protect, addCourse)

router.get('/', getCourse)

router.get('/:courseId',protect, getSingleCourse )

router.patch('/:courseId', protect,updateCourse)

router.delete('/:courseId',protect,deleteCourse)

module.exports = router;