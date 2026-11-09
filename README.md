# REST API – Book Management System

## About the Project
This project is a simple REST API developed using Node.js and Express.js to manage a list of books.

It supports CRUD operations (Create, Read, Update, Delete) and stores book data in memory without using a database.

## Technologies Used
- Node.js
- Express.js
- JavaScript
- Postman
- VS Code

## Features
- Add a new book.
- View all available books.
- Update book details using ID.
- Delete a book using ID.
- Handle JSON requests and responses.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/books` | Get all books |
| POST | `/books` | Add a new book |
| PUT | `/books/:id` | Update a book |
| DELETE | `/books/:id` | Delete a book |

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/aadityajpatil06-droid/Internship_Task_3.git
   ```

2. Navigate to the project folder:
   ```bash
   cd Internship_Task_3
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the server:
   ```bash
   node server.js
   ```

5. Server runs at:
   `http://localhost:3000`

## Testing
All API endpoints were tested using Postman:
- GET – 200 OK
- POST – 201 Created
- PUT – 200 OK
- DELETE – 200 OK

## Learning Outcomes
- Understanding REST API concepts.
- Working with Express.js routes.
- Understanding HTTP methods.
- Handling JSON data.
- Performing CRUD operations.

## Author
**Aaditya Patil**

GitHub: [aadityajpatil06-droid](https://github.com/aadityajpatil06-droid)
