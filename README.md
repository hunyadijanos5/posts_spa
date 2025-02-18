# Posts SPA

Posts SPA is a simple single-page application (SPA) for managing and viewing posts, comments, and tags. This project uses Node.js and Express for the backend and serves existing static files for the frontend.

## Project Structure

```
/<workdir>/projects/posts_spa
├── app
│   ├── middleware
│   │   └── auth.js
│   ├── routes
│   │   ├── auth.js
│   │   ├── posts.js
│   │   └── tags.js
│   ├── store
│   │   ├── comments.json
│   │   ├── index.js
│   │   ├── posts.json
│   │   └── tags.json
│   └── server.js
├── public
│   ├── index.html
│   └── scripts
│       └── index.js
├── .env
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

3. Create a `.env` file in the root directory and add your secret key:
    ```
    ACCESS_TOKEN_SECRET=M9F4nn9T0ken
    ```

## Running the Application

1. Start the server:
    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## API Endpoints

### Authentication

- `POST /api/auth/login` - Generate a JWT token. Requires a JSON body with a `username` field.

### Posts

- `GET /api/posts` - Retrieve all posts. Requires authentication.
- `GET /api/posts/:id` - Retrieve a specific post by ID. Requires authentication.
- `GET /api/posts/:id/comments` - Retrieve comments for a specific post. Requires authentication.

### Tags

- `GET /api/tags/:name` - Retrieve posts by tag name. Requires authentication.

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

## Frontend

The frontend is a simple HTML page that uses JavaScript to fetch data from the API and render it on the page. The `index.js` script handles the login, stores the token, and uses the token for all subsequent requests.

### Example Usage

1. The `login` function sends a POST request to `/api/auth/login` with a username to get a JWT token.
2. The token is stored in `localStorage` and used for all subsequent requests to the API.
3. The `loadContent` function fetches data from the API and renders it on the page.

## License

This project is licensed under the MIT License.
