
# MERN GPT Project

## Overview
This project is a clone of ChatGPT developed using the MERN stack (MongoDB, Express.js, React.js, Node.js) and the Groq API. It leverages modern web technologies to provide an interactive conversational AI experience.

## Features
- **Real-time chat functionality**: Users can interact with the AI in real-time.
- **User Authentication**: Secure user registration and login using JWT.
- **Persistent Conversations**: Chat history is stored in MongoDB for each user.
- **Dynamic Responses**: Responses are generated using the Groq API, providing accurate and context-aware replies.

## Technologies Used
- **MongoDB**: Database to store user data and chat history.
- **Express.js**: Backend framework for handling API requests and server-side logic.
- **React.js**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime for executing server-side code.
- **Groq API**: API for generating AI responses.

## Prerequisites
- Node.js
- MongoDB
- Groq API Key

## Installation

1. **Clone the repository**
    ```bash
    git clone https://github.com/yourusername/mern-gpt.git
    cd mern-gpt
    ```

2. **Backend Setup**
    - Navigate to the `backend` directory
        ```bash
        cd backend
        ```
    - Install backend dependencies
        ```bash
        npm install
        ```
    - Create a `.env` file in the `backend` directory and add your MongoDB URI and Groq API Key
        ```env
        MONGO_URI=your_mongodb_uri
        GROQ_API_KEY=your_groq_api_key
        JWT_SECRET=your_jwt_secret
        ```
    - Start the backend server
        ```bash
        npm start
        ```

3. **Frontend Setup**
    - Navigate to the `frontend` directory
        ```bash
        cd ../frontend
        ```
    - Install frontend dependencies
        ```bash
        npm install
        ```
    - Create a `.env` file in the `frontend` directory and add the backend URL
        ```env
        REACT_APP_API_URL=http://localhost:5000
        ```
    - Start the frontend development server
        ```bash
        npm start
        ```

## Usage
1. Open your browser and navigate to `http://localhost:3000`.
2. Register a new user or login with an existing account.
3. Start chatting with the AI and enjoy the real-time conversation experience.



## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request


## Acknowledgements
- [MongoDB](https://www.mongodb.com/)
- [Express.js](https://expressjs.com/)
- [React.js](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Groq API](https://groq.com/)
```

Make sure to replace placeholders like `your_mongodb_uri`, `your_groq_api_key`, and `your_jwt_secret` with actual values. This README provides a clear and detailed guide for users and contributors to understand, set up, and contribute to your project.
