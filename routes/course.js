const express = require('express')
const {addCourse,getCourse,getSingleCourse,updateCourse,deleteCourse} = require('../controllers/course')


const router = express.Router({mergeParams:true})


router.post('/', addCourse)

router.get('/', getCourse)

router.get('/:courseId',getSingleCourse )

router.patch('/:courseId', updateCourse)

router.delete('/:courseId',deleteCourse)

module.exports = router;