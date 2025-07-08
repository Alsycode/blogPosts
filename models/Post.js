const mongoose = require('mongoose');

// Create Schema
const postSchema = new mongoose.Schema({
    title: String,
    content: String
});

// Create Model
const Post = mongoose.model('Post', postSchema);

module.exports = Post;