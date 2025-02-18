# Posts SPA

Posts SPA is a simple single-page application (SPA) for managing and viewing posts, comments, and tags. This project uses Node.js and Express for the backend and serves existing static files for the frontend.

## Project Structure

```
/<workdir>/projects/posts_spa
├── app
│   ├── routes
│   │   ├── posts.js
│   │   └── tags.js
│   ├── store
│   │   ├── comments.json
│   │   ├── index.js
│   │   ├── posts.json
│   │   └── tags.json
│   └── server.js
├── public
│   └── index.html
└── README.md
```

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/hunyadijanos5/posts_spa.git
    cd posts_spa
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Running the Application

1. Start the server:
    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## API Endpoints

### Posts

- `GET /api/posts` - Retrieve all posts.
- `GET /api/posts/:id` - Retrieve a specific post by ID.
- `GET /api/posts/:id/comments` - Retrieve comments for a specific post.

### Tags

- `GET /api/tags/:name` - Retrieve posts by tag name.

## Data Structure

### Posts

Each post has the following structure:
```json
{
    "id": 1,
    "title": "Post Title",
    "headline": "Post Headline",
    "body": "Post Body",
    "tags": ["tag1", "tag2"],
    "userId": 1,
    "created_at": "2023-02-11"
}
```

### Comments

Each comment has the following structure:
```json
{
    "id": 1,
    "body": "Comment Body",
    "postId": 1,
    "created_at": "2023-02-11",
    "description": "Comment Description",
    "author": "Author Name"
}
```

### Tags

Each tag has the following structure:
```json
{
    "id": 1,
    "name": "Tag Name",
    "created_at": "2023-02-11",
    "description": "Tag Description"
}
```

## License

This project is licensed under the MIT License.
