const express = require('express');
const router = express.Router();
const postController = require('../controllers/postControllers.js');

// Define routes
router.get('/getPosts', postController.getPosts);
router.post('/addPosts', postController.addPost);
router.delete('/delPosts/:id', postController.deletePost);
router.patch('/post/:id', postController.updatePost);

module.exports = router;