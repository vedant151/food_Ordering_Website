// Making up the Mongoose Model

const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }, 
    
    menu: {
        type: String,
        // required: true,
        // unique: true,
    },
    item:{
        type: String
        // required: true
        
    },
    quantity: String,
    gender: String,
    // status: String
})


const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;
