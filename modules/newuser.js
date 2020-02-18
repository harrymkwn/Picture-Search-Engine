const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    password: {
      type: String,
      default: 0,
      validate(value) { 
        if (value < 0) throw new Error("change password");
      },
      isNotEmpty : true
    },
  });

  const user = mongoose.model('users', userSchema);
module.exports = user;