const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.APP_PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const startCronJobs = require('./cronJobs');

app.use(session({
  secret: 'your secret key',
  resave: false,
  saveUninitialized: true,
}));

app.use(flash());

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'app', 'views'));

// Set up static files
app.use(express.static('public'));

// Use body-parser middleware
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

// Define routes
const eventRoutes = require('./app/routes/eventRoutes');
app.use('/', eventRoutes);
const userEventsRoutes = require('./app/routes/userEventsRoutes');
app.use('/', userEventsRoutes);

// bootstrap
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// Start the cron jobs
startCronJobs();

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

process.on('exit', () => {
  pool.end();
});