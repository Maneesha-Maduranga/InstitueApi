const jwt = require('jsonwebtoken')


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

        req.user = decode.id;

        next()

    } catch (error) {
        return res.status(401).json({
            sucess:false,
            err:"Access Denied"
        })
    }


}

module.exports = {
    protect
}