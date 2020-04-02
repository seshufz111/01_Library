const express = require('express')

const router = new express.Router()

router.get('/about', function(req,res){
    res.send('Testing')

})

router.get('', function(req,res){
    res.send('Welcome to Store Application')
})

router.get('/index', function(req,res){
    res.render('index', {name:'Satya', Role:'Developer'})
})

router.get('/about', function(req,res){
    res.send('Welcome to App')
})

router.get('/Help', function(req,res){
    res.send('Welcome to library')
})
module.exports = router;