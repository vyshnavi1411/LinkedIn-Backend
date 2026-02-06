const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/Comment.controller');

// create comment route
router.post('/create-comment', CommentController.createComment);

module.exports = router;