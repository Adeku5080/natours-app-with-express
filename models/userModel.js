const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  photo: {
    type: String,
  },
  password: {
    type: String,
    required: [true, "User must have a password"],
    minlength: 8,
  },
  passwordConfirm: {
    type: String,
    required: [true, "this field is required"],
    validate: {
      validator: function (el) {
        return el == this.password;
      },
      message :"passwords are not the same!"
    },
  },
});

userSchema.pre('save', async function(next){
    //only run this function if password was modified
    if(!this.isModified('password'))
     return next() 
    //hash the password
    this.password = await bcrypt.hash(this.password,12)
    // delete the passwordConfirm field 
    this.passwordConfirm = undefined
    next()
})

const User = mongoose.model("User", userSchema);

module.exports = User;
