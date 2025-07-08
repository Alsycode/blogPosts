const Post = require('../models/Post');

// GET all posts
exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (err) {
        res.status(500).json({ error: 'Error fetching posts' });
    }
};

// POST a new post
exports.addPost = async (req, res) => {
  try {
    const post = new Post({
      title: req.body.title,
      content: req.body.content
    });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    console.error('Post creation error:', err); // ✅ Log the real error
    res.status(500).json({ error: 'Error creating post' });
  }
};

// DELETE a post
exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Error deleting post' });
    }
};

// PATCH a post
exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (err) {
        res.status(500).json({ error: 'Error updating post' });
    }
};