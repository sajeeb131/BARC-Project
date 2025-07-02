const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password:{
        type: String,
        required: true,
        minLength: 8
    }
},{ timestamps:true })

module.exports = mongoose.model('User', userSchema)
