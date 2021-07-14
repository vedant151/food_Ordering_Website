// Importing Packages

const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require("body-parser")
const path = require('path')

const connectDB = require('./server/database/connection')
const app = express()

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT||8080


// log request 
app.use(morgan('tiny'))


// MongoDB Connection
connectDB();

// Parse requeste to body-parser
app.use(bodyparser.urlencoded({extended : true}))


// set view engine
app.set("view engine", "ejs")



// load assets
app.use('/css',express.static(path.resolve(__dirname, "assets/css")))
app.use('/img',express.static(path.resolve(__dirname, "assets/img")))
app.use('/js',express.static(path.resolve(__dirname, "assets/js")))



// app.get('/', (req,res)=> {
//     res.render('index')
// })

// app.get('/add-user', (req,res)=> {
//     res.render('backend')
// })

// app.get('/new-user', (req,res)=> {
//     res.render('add_user')
// })

// app.get('/update-user', (req,res)=> {
//     res.render('update_user')
// })

// load routes 
app.use('/', require('./server/routes/router'))



app.listen(PORT, ()=>{console.log(`Listening at PORT ${PORT}`) })