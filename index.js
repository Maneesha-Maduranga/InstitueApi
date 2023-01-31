const express = require('express')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit')
var cors = require('cors')

//Error Handler
require('express-async-errors');
//Connect To the Database
connectDB();


const app = express()

const limiter = rateLimit({
	windowMs: 5 * 60 * 1000, // 5 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to all requests
app.use(limiter)

//Cors
app.use(cors())
//Use Body Parser
app.use(express.json())
//Cookie Parser
app.use(cookieParser())
//Prvent No Sql Injection
app.use(mongoSanitize());

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