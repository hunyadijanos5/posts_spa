const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const postsRouter = require('./routes/posts');

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/posts', postsRouter);

app.get(['/posts', '/requirements'], (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
