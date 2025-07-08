# Inventory API Backend

A simple backend built with Express.js and MongoDB for managing inventory items. This project demonstrates building RESTful APIs, using middleware, connecting to MongoDB with Mongoose, and testing APIs with Postman.

---

## Features

- Express.js server running on port 3000  
- Custom middleware to log requests and handle 404 errors  
- MongoDB connection via Mongoose  
- Routes to add new items and list all items  
- Tested with Postman  

---

## Project Structure

blog-api/
├── controllers/
│   └── postController.js    # Handles API logic for posts
├── models/
│   └── Post.js             # Defines Mongoose schema and model
├── routes/
│   └── postRoutes.js       # Defines API routes
├── .env                    # Environment variables (not committed)
├── .gitignore              # Excludes node_modules and .env
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Dependency lock file
├── server.js               # Main server file
└── README.md               # Project documentation

Prerequisites





Node.js: Version 14.x or higher



MongoDB: Local MongoDB server or MongoDB Atlas



Postman: For testing API endpoints



Git: For version control

Setup Instructions





Clone the Repository:
git clone <your-repo-url>
cd blog-api

Install Dependencies
npm install

Configure Environment Variables:
Create a .env file in the project root