const User = require('../models/User')

const getUser = async(req,res) => {

    let userId = req.params.id
    let user = await User.findById(userId,'name email ')
    res.status(200).json({
        sucess:true,
        data:user
    })

}

const getUsers = async(req,res) => {
    
    let users = await User.find().select('name email role')
    res.status(200).json({
        sucess:true,
        data:users
    })

}

const createUser = async(req,res) => {
   

    let user = await User.create(req.body)

    res.status(201).json({
        sucess:true,
        data:user
    })

}

const deleteUser = async(req,res) => {
    
    let userId = req.params.id

    await User.findByIdAndDelete(userId)

    res.status(200).json({
        sucess:true,
        data:{}
    })
}

const updateUser = async (req,res) => {
   
    let userId = req.params.id

    let user = await User.findByIdAndUpdate(userId,req.body,{
        new:true
    })

    res.status(200).json({
        sucess:true,
        data:user
    })
}

module.exports = {
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser
}