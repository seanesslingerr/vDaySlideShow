const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

// Set up handlebars
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Example route
app.get('/', (req, res) => {
  res.render('main', {
    title: 'Hello Docker',
    message: 'This should keep the server running!'
  });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
