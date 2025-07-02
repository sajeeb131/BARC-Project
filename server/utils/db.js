//create mongodb connection
const mongoose = require('mongoose')

const connect_db = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('connected to mongodb database')
    }catch(error){
        console.log(error.message)
        process.exit(1)
    }
}

module.exports = connect_db