const mongoose = require('mongoose');

const user_schema = new mongoose.Schema({
    
})

const user = mongoose.model('User', user_schema)

module.exports = user;
