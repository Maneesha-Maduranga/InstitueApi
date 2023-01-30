const express = require('express')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')

//Error Handler
require('express-async-errors');
//Connect To the Database
connectDB();


const app = express()

//Use Body Parser
app.use(express.json())
//Cookie Parser
app.use(cookieParser())

//Institue Routes
app.use('/api/institute' , require('./routes/institute'));
//Course Routes
app.use('/api/course', require('./routes/course'))
//Auth Routes
app.use('/api/user', require('./routes/auth'))
//Admin Routes
app.use('/api/admin/user', require('./routes/user'))
//Review Routes
app.use('/api/review', require('./routes/review'))

app.listen(5000,() => {
    console.log("Server Is Runinng");
})