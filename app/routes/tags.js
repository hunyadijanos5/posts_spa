const express = require('express');
const router = express.Router();
const getData = require('../store');

router.get('/:name', (req, res) => {
  const data = getData();
  const posts = data.posts.filter(p => p.tags.includes(req.params.name));
  res.json({ data: posts });
});

module.exports = router;
