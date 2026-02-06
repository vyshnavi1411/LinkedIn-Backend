const Post = require('../models/Post.model');
// create a post controller
const createPost = async (req, res) => {
    try {
        const { content, author } = req.body;
        const post = new Post({ content, author });
        await post.save();
        res.status(201).json({ message: 'Post created successfully', post });
    } catch (error) {
        console.log("error", error.message);
    }
}
const getAllPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'username email')
        res.status(200).json({ message: "Posts fetched successfully", posts });
    } catch (error) {
        console.log("error", error.message);
    }
}
const likePost = async (req, res) => {
    try {
        const { postId, userIdObj } = req.body;
        const post = await Post.findById(postId);
        post.likes.push(userIdObj);
        await post.save();
        res.status(200).json({ message: "Post liked successfully" });
    } catch (error) {
        console.log("error", error.message);
    }
}
module.exports = { createPost, getAllPosts, likePost };