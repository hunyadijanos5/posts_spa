const fs = require('fs');
const path = require('path');

const getData = () => {
    const posts = JSON.parse(fs.readFileSync(path.join(__dirname, 'posts.json'), 'utf8')).posts;
    const comments = JSON.parse(fs.readFileSync(path.join(__dirname, 'comments.json'), 'utf8')).comments;
    const tags = JSON.parse(fs.readFileSync(path.join(__dirname, 'tags.json'), 'utf8')).tags;

    return { posts, comments, tags };
}

module.exports = getData;