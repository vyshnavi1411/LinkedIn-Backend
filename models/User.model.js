//mongoose
const mongoose = require('mongoose');
// user schema
const userSchema = new mongoose.Schema({
    //fields
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    lastlogin:{
        type: Date,
    }
},
//timestamps will tell you the time user was created user was stored and last updated
{timestamps: true}); //createdAt, updatedAt

//model
const User = mongoose.model('User', userSchema);

//export the model
module.exports = User;