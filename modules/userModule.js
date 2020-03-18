const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required : true
      
    },
    firstName: {
        type: String,
        required : true
      },
    lastName: {
        type: String,
        required : true
    },
    user_name : {
        type : String,
        unique : true,
        required : true,
    },
    phone: {
        type: String,
        required : true
    },
    password: {
        type: String,
        required: true
    }

});

const user = mongoose.model('users', userSchema);
module.exports = user;