const express = require('express')
const router = express.Router()
const {registerUser,loginUser,getUser,logout} = require('../controllers/auth')
const {protect} = require('../middleware/authmiddleware')

router.post('/signin', registerUser)

router.post('/login', loginUser)

router.get('/me', protect,  getUser)

router.get('/logout',logout)

module.exports = router;