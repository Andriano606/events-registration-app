const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;
const path = require('path');
require('dotenv').config();

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app', 'views'));

// Set up static files
app.use(express.static('public'));

// Define routes
const userRoutes = require('./app/routes/eventRoutes');
app.use('/', userRoutes);

// bootstrap
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on('exit', () => {
  // Close the database connection pool
  pool.end();
});
