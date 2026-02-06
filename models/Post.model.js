//mongoose
const mongoose = require('mongoose');
// user schema
const PostSchema = new mongoose.Schema({
    //fields
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.ObjectId,
        required: true,
        ref: "User"
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "User"
    }],
    numberOfComments: [{
        type: Number,
        default: 0
    }]
},
//timestamps will tell you the time user was created user was stored and last updated
{timestamps: true}); //createdAt, updatedAt

//model
const Post = mongoose.model('Post', PostSchema);

//export the model
module.exports = Post;