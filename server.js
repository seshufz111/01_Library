if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}


const express = require('express')
const path = require('path');
const hbs = require('hbs')
const router = require('./Routers/app')
require('./db/mongoose')
const user = require('./Models/user')

const app = express();
const port = process.env.PORT || 5050;

const viewsPath = path.join(__dirname,'./templates/views')
const partialsPath = path.join(__dirname,'./templates/partials')

app.set('view engine', 'hbs');
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)
app.use(router)

app.listen(port, function(){
    console.log('Port is listening:' +port)
    
})