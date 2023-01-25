const express = require('express')
require('dotenv').config()
const connectDB = require('./config/db')

//Connect To the Database
connectDB();


const app = express()

//Class Routes
app.use('/api/class' , require('./routes/class'))




app.listen(5000,() => {
    console.log("Server Is Runinng");
})