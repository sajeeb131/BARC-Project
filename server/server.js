const express = require('express');
const db = require('./utils/db');
require('dotenv').config();
const authRoutes = require('./routes/auth-routes');
const homeRoutes = require('./routes/home-routes')

const app = express();
const PORT = process.env.PORT || 4000;


app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use('/', authRoutes);
app.use('/home', homeRoutes);


app.listen(PORT, async()=>{
    await db();
    console.log('application running on port 4000')
})