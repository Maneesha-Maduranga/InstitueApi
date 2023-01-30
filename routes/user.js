const express = require('express')

const router = express.Router()

const {getUser,getUsers,createUser,updateUser,deleteUser} = require('../controllers/user')
const {protect,grant} = require('../middleware/authmiddleware')

//All Crud Functionality for the Admin

router.use(protect)
router.use(grant('admin'))

router.get('/', getUsers)

router.get('/:id', getUser)

router.post('/', createUser)

router.patch('/:id', updateUser)

router.delete('/:id', deleteUser)

module.exports = router