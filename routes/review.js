const express = require('express')
const {getallReview, createReview}  = require('../controllers/review')
const {protect,grant} = require('../middleware/authmiddleware')

const router = express.Router({mergeParams:true})

router.get('/', getallReview)

router.post('/', protect, grant("user"),createReview)

module.exports = router

