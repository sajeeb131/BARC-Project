const jwt = require('jsonwebtoken');

const secretKey = process.env.SECRET_KEY;

exports.createToken = (payload, res) => {
    const expiresIn = '3d';

    const token = jwt.sign(
        payload, 
        secretKey, 
        { expiresIn }
    );

    const maxAge = 3 * 24 * 60 * 60 * 1000; 

    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge
    });
    
    return token;
}

exports.verifyToken = (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        return res.status(400).json({
            success: false,
            message: 'No token found'
        });
    }
    
    jwt.verify(token, secretKey, (err, decoded) => {
        if(err){
            return res.status(400).json({
                success: false,
                message: 'Invalid token'
            });
        }
        req.user = decoded;
        next();
    });
}