const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory array for books
let books = [
    { id: 1, title: 'The Alchemist', author: 'Paulo Coelho' },
    { id: 2, title: 'Atomic Habits', author: 'James Clear' }
];

// 1. GET: Fetch all books
app.get('/books', (req, res) => {
    res.json(books);
});

// 2. POST: Add a new book
app.post('/books', (req, res) => {
    const newBook = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
    };

    books.push(newBook);
    res.status(201).json({
        message: "Book added successfully!",
        book: newBook
    });
});

// 3. PUT: Update an existing book by ID
app.put('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const book = books.find(b => b.id === bookId);

    if (!book) {
        return res.status(404).json({ message: "Book not found!" });
    }

    book.title = req.body.title || book.title;
    book.author = req.body.author || book.author;

    res.json({
        message: "Book updated successfully!",
        book: book
    });
});

// 4. DELETE: Remove a book by ID
app.delete('/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id === bookId);

    if (bookIndex === -1) {
        return res.status(404).json({ message: "Book not found!" });
    }

    const deletedBook = books.splice(bookIndex, 1);
    res.json({
        message: "Book deleted successfully!",
        book: deletedBook[0]
    });
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});