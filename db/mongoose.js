

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {
useNewUrlParser:true,
useCreateIndex:true,
useUnifiedTopology:true,
}, function(error, data){
    if(error){

        throw new Error('Data Base is Not Connected')
        
    }
    console.log('dataBase is connected');
    
})