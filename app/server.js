const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const app = express();
const port = 3000;
const postsRouter = require('./routes/posts');
const tagsRouter = require('./routes/tags');
const authRouter = require('./routes/auth');
const authenticateToken = require('./middleware/auth');

dotenv.config();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/api/auth', authRouter);
app.use('/api/posts', authenticateToken, postsRouter);
app.use('/api/tags', authenticateToken, tagsRouter);

app.get(/^\/(posts(\/\d+)?|requirements|tags\/[^\/]+)$/, (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
