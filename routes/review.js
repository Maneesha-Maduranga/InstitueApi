const express = require('express')
const {getallReview}  = require('../controllers/review')

const router = express.Router({mergeParams:true})

router.get('/', getallReview)

module.exports = router

