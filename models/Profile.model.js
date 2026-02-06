//mongoose
const mongoose = require('mongoose');
// user schema
const ProfileSchema = new mongoose.Schema({
    //fields
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    headline: {
        type: String,   
    },
    summary: {
        type: String,
    },
    experience: [{
        companyName: String,
        joiningDate: String,
        lastDate: String,
        description : String,
    }],
    skills: {
        type: [String],           
        },
    education: [{
        schoolName: String,
        session: String,
    }],
},
//timestamps will tell you the time user was created user was stored and last updated
{timestamps: true}); //createdAt, updatedAt

//model
const Profile = mongoose.model('Profile', ProfileSchema);

//export the model
module.exports = Profile;