const jwt = require('jsonwebtoken')
const User = require('../models/User')


const protect = async(req,res,next) => {

    let token;
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split('')[1];
    }else if(req.cookies.Token){
        token = req.cookies.Token
    }

    if(!token){
        return res.status(401).json({
            sucess:false,
            err:"Acees Denied"
        })
    }

    try {
        
        let decode = await jwt.verify(token,process.env.JWT_PRIVATE_KEY)

        req.user = await User.findById(decode.id,'name email role') 

        next()

    } catch (error) {
        return res.status(401).json({
            sucess:false,
            err:"Access Denied"
        })
    }


}

//Grant Acess To The Secific User

const grant = (role) => {

    return (req,res,next) => {

        if(role.includes(req.user.role)){

            next()
            
        }
        else{
           return res.status(401).json({
                sucess:false,
                err:"You dont Have Permission"
            })
        }
    }
}

module.exports = {
    protect,
    grant
}