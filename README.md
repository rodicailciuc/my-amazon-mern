# MERN Template

A boilerplate for building full-stack applications using the MERN (MongoDB, Express, React, Node.js) stack. This template sets up essential configurations and file structures, allowing you to quickly start developing robust, scalable web applications.

## Features

- **Express Backend**: RESTful API setup with environment-specific configurations.
- **React Frontend**: Vite-powered development with hot-reloading.
- **MongoDB Integration**: Simple database connection using MongoDB Atlas or a local MongoDB server.
- **Environment Management**: `.env` support for flexible configuration in development and production.

## Getting Started

Follow the steps below to set up and run the project locally.

### Prerequisites

Ensure the following tools are installed on your machine:

- [Node.js](https://nodejs.org/) (v20.x or later)
- [MongoDB Community Server](https://www.mongodb.com/) or MongoDB Atlas (for remote hosting)
- [Nodemon](https://www.npmjs.com/package/nodemon) (for backend hot-reloading)
- [MongoDB Compass](https://www.mongodb.com/products/tools/compass) (optional, for database inspection)

### Project Structure

```plaintext
/mern-template
 ├── /backend    # Express server-side code
 └── /frontend   # React client-side code
```

## Backend Setup

1. **Navigate to the backend directory**:

    ```bash
    cd backend
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up environment variables**:

   Create a `.env` file in the `backend` directory with the following keys:

    ```plaintext
     PORT=5004
        CORS_ORIGINS=http://localhost:5173
        TOKEN_SECRET=YOUR_TOKEN_SECRET
        CONNECTION_URI=YOUR_CLUSTER_URI
        STRIPE_SECRET_KEY=YOUR_STRIPE_SECRET_KEY
    ```

4. **Run the development server**:

    ```bash
    npm run dev
    ```

   The backend API will now be running at `http://localhost:5004`.

### Backend Scripts

- `npm run start` – Starts the server in production mode.
- `npm run dev` – Starts the server in development mode with [Nodemon](https://www.npmjs.com/package/nodemon) for auto-restarts on changes.

## Frontend Setup

1. **Navigate to the frontend directory**:

    ```bash
    cd frontend
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Set up environment variables**:

   Create `.env` and `.env.production` files in the `frontend` directory:

    ```plaintext
    # .env (for development)
    VITE_API_URL=http://localhost:5004/api

    # .env.production (for production)
    VITE_API_URL=/api
    ```

4. **Run the React development server**:

    ```bash
    npm run dev
    ```

   The frontend will be available at `http://localhost:5173`.

### Frontend Scripts

- `npm run dev` – Starts the frontend development server with hot-reloading.
- `npm run build` – Builds the frontend for production.

## Running the Full Application

1. **Start the backend server**:

    ```bash
    cd backend
    npm run dev
    ```

2. **Start the frontend server**:

    ```bash
    cd frontend
    npm run dev
    ```

Visit `http://localhost:5173` to view the app. The frontend will proxy API requests to the backend server running on `http://localhost:5004`.

## Environment Configurations

- **Backend Environment Variables**:
  - `PORT` – Port for the backend server (default: 5004).
  - `TOKEN_SECRET` – Secret key for JWT authentication.
  - `CONNECTION_URI` – MongoDB connection string.

- **Frontend Environment Variables**:
  - `VITE_API_URL` – API base URL for both development and production environments.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
