const User = require('../models/user-model')
const {createToken} = require('../utils/auth')

exports.login = async(req, res) =>{
    console.log('inside login')
    const {email, password} = req.body;
    try{
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                success: false,
                message: "User does not exist!"
            })
        }

        const isValid = user.password === password 
        if(!isValid){
            return res.status(400).json({
                success:false,
                message: "Invalid credentials"
            })
        }
        else{
            return res.status(200).json({
                success:true,
                message: "logged in successfully.",
                data: user
            })
        }

    }catch(error){
        res.status(500).json({
            success: false,
            message: "500 Internal server error. "
        })
    }
}

exports.signup = async(req, res) =>{
    const {email, password} = req.body;
    try{
        const exists = await User.findOne({email})
        if(exists){
            return res.status(400).json({
                message: "User already exists!"
            })
        }
        const user = new User({email, password});
        await user.save();
        res.status(201).json({
            success:true,
            message: "User sign up successfull!"
        })

    }catch(error){
        res.status(500).json({
            success: false,
            message: "500 Internal server error. "
        })
    }
}

exports.logout = async(req,res) =>{
    try{

    }catch(error){
        return res.status(500).json({
            success:false,
            message: "Internal server error"
        })
    }
}