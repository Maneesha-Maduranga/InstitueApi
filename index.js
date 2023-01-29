const express = require('express')
require('dotenv').config()
const connectDB = require('./config/db')
//Error Handler
require('express-async-errors');
//Connect To the Database
connectDB();


const app = express()

//Use Body Parser
app.use(express.json())

//Institue Routes
app.use('/api/institute' , require('./routes/institute'));
//Course Routes
app.use('/api/course', require('./routes/course'))
//User Routes
app.use('/api/user', require('./routes/auth'))


app.listen(5000,() => {
    console.log("Server Is Runinng");
})