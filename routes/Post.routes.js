const express = require('express');
const router = express.Router();
const { createPost,getAllPosts,likePost } = require('../controllers/Post.controllers');

// create a post route
router.post('/create-post', createPost);
router.get('/get-posts', getAllPosts);
router.post('/like', likePost);

module.exports = router;