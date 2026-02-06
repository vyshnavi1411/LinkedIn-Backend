const Comment = require('../models/Comment.model');

// create comment controller
const createComment = async (req, res) => {
    try{
        const { textComment, userId, postId } = req.body;
        const comment = new Comment({
            textComment,
            userId,
            postId
        });
        await comment.save();
        res.status(201).json({message: "Comment created successfully", comment});
    }
    catch(error){
        console.log("error", error.message);
    }
}
exports.createComment = createComment;