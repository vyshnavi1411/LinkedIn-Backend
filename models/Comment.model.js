//mongoose
const mongoose = require('mongoose');
// user schema
const CommentSchema = new mongoose.Schema({
    //fields
   textComment: {
        type: String,
        required: true,
    },
    userId :{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    postId :{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Post"
    },
    //replies to comment
    

},
//timestamps will tell you the time user was created user was stored and last updated
{timestamps: true}); //createdAt, updatedAt

//model
const Comment = mongoose.model('Comment', CommentSchema);

//export the model
module.exports = Comment;