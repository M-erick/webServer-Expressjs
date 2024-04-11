const http = require('http');
// const fs = require('fs');

const port = 3000;
const bookList = [
    { id: 1, title: "Computer Engineering", author: "Gaddafi" },
    { id: 2, title: "Human Computer Interaction", author: "Marcus" },
    { id: 3, title: "JavaScript OOP Concepts", author: "Jane" },
    { id: 4, title: "Advanced OOP Concepts", author: "Lynet" },
  ];
// html content 
let htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Book Store (BS.)</title>
      </head>
      <body>
        <h1>Book Store (BS.)</h1>
        <ul>
  `;

  // Loop through book data and add list items dynamically
  bookList.forEach(book => {
    htmlContent += `
          <li>
            ${book.title} by ${book.author}
          </li>
        `;
  });

  htmlContent += `
        </ul>
      </body>
    </html>
  `;

http.createServer((req, res) => {

    if (req.url === '/') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        // res.write('Book Store (BS.)');
        res.write(htmlContent);
        res.end();
        
    }
    if (req.url === '/about') {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write('This is the about page');
        
    }
// const  port = process.env.PORT || 3000;
   
}).listen(port,()=>{
    console.log(`listening on port ${port}`);
});