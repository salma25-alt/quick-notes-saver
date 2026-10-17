# Quick Notes Saver

A lightweight notes management application built with Node.js, Express.js, and MongoDB. This project demonstrates backend development fundamentals, REST API design, and database integration.

## Overview

Quick Notes Saver is designed to provide a simple way to manage notes through a backend application. It uses Express.js to handle HTTP requests and MongoDB to store application data.

## Technology Stack

- **Runtime:** Node.js
- **Backend Framework:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Language:** JavaScript
- **Version Control:** Git and GitHub

## Project Structure

```text
quick-notes-saver/
├── models/
│   └── Note.js
├── routes/
│   └── note.js
├── .gitignore
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB local instance or MongoDB Atlas account
- Git

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/salma25-alt/quick-notes-saver.git
```

**2. Navigate to the project directory**

```bash
cd quick-notes-saver
```

**3. Install dependencies**

```bash
npm install
```

**4. Configure environment variables**

Create a `.env` file in the project root and add the variables required by the application.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Ensure the variable names match those used in the application. Keep credentials and environment files private.

**5. Start the application**

```bash
node server.js
```

The server should start on the configured port if the database connection and configuration are valid.

## Learning Objectives

This project provides practical experience with:

- Building a Node.js and Express.js backend
- Organizing code using routes and models
- Connecting an application to MongoDB
- Managing dependencies with npm
- Using Git and GitHub for version control

## Future Improvements

- Add input validation and consistent error handling
- Implement note search and filtering
- Add user authentication and user-specific notes
- Deploy the application with a cloud-hosted database

## Author

**Salma**

GitHub: [salma25-alt](https://github.com/salma25-alt)

## License

No license has been specified yet.
