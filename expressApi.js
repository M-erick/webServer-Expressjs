const express = require('express');
const app = express();

// app.use(bodyParser.json());

// an array of objects
const books = [
    { id: 1, title: "Computer Engineering", author: "Gaddafi" },
    { id: 2, title: "Human Computer Interaction", author: "Marcus" },
    { id: 3, title: "JavaScript OOP Concepts", author: "Jane" },
    { id: 4, title: "Advanced OOP Concepts", author: "Lynet" },
];

// Add body parsing middleware
app.use(express.json());

// url :http://localhost:3000/api/books
// GET all books
app.get('/api/books', (req, res) => {
    res.send(books);
});

// GET a book by ID
app.get('/api/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id); 
    const book = books.find(book => book.id === bookId);

    if (!book) {
        return res.status(404).send('Book not found'); 
    }

    res.send(book);
});

// POST a new book (create)
app.post('/api/books', (req, res) => {
    const newBook = {
        id: books.length + 1, 
        title: req.body.title,
        author: req.body.author,
    };

   

    books.push(newBook);
    res.send(newBook);
});

// DELETE a book by ID
app.delete('/api/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex(book => book.id === bookId);

    // if book with given id not found return error :
    if (bookIndex === -1) {
        return res.status(404).send('Book not found'); 
    }

    const deletedBook = books.splice(bookIndex, 1)[0]; // Remove and return deleted book
    res.send(deletedBook);
});

app.put('/api/books/:id', (req, res) => {
    const bookId = parseInt(req.params.id);
    const bookIndex = books.findIndex(book => book.id === bookId);

    // if the given id not found return error
    if (bookIndex === -1) {
        return res.status(404).send('Book not found');
    }

    const { title, author } = req.body; 

    // Update book properties if provided in request body
    if (title) {
        books[bookIndex].title = title;
    }
    if (author) {
        books[bookIndex].author = author;
    }

    res.send(books[bookIndex]); 
});


app.listen(3000, () => console.log('Server listening on port 3000'));
