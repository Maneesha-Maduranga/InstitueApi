const express = require('express')
const {addCourse,getCourse,getSingleCourse,updateCourse,deleteCourse} = require('../controllers/course')
const {protect,grant} = require('../middleware/authmiddleware')

const router = express.Router({mergeParams:true})


router.post('/',protect, grant(["publisher","admin"]),addCourse)

router.get('/', getCourse)

router.get('/:courseId',protect,  grant(["publisher","admin"]),getSingleCourse )

router.patch('/:courseId', protect, grant(["publisher","admin"]),updateCourse)

router.delete('/:courseId',protect, grant(["publisher","admin"]),deleteCourse)

module.exports = router;