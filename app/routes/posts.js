const express = require('express');
const router = express.Router();
const getData = require('../store');

router.get('/', (req, res) => {
  const data = getData();
  res.json({ data: data.posts });
});

router.get('/:id', (req, res) => {
  const data = getData();
  const post = data.posts.find(p => p.id === parseInt(req.params.id));
  if (post) {
    res.json({ data: post });
  } else {
    res.status(404).send('Post not found');
  }
});

router.get('/:id/comments', (req, res) => {
  const data = getData();
  const comments = data.comments.filter(c => c.postId === parseInt(req.params.id));
  res.json({ data: comments });
});

module.exports = router;
