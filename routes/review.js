const express = require('express')
const {getallReview, createReview,updateReview, deleteReview}  = require('../controllers/review')
const {protect,grant} = require('../middleware/authmiddleware')

const router = express.Router({mergeParams:true})

router.get('/', getallReview)

router.post('/', protect, grant("user"),createReview)


router.put('/:id', protect,grant("user","admin"), updateReview)

router.delete('/:id', protect,grant("user","admin"), deleteReview)

module.exports = router

