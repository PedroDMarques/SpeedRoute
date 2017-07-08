/**
 * Main entry point of the server application.
 *
 * Responsible for setting up the configurations for the server,
 * 	and setting up all the top domain routes to their code counterparts
 *
 * Module exports: server application, instanceof express()
 */

const express = require('express');
const winston = require('winston');

// Import all of the top level routers
const workshopRouter = require('./workshop');
const routeRouter = require('./route');
const userRouter = require('./user');
const apiRouter = require('./api');
const blogRouter = require('./blog');

// Create the server application
const app = express();

// Set static files for the server
app.use('/public', express.static('public'));

// Set views directory and view engine
app.set('views', './views');
app.set('view engine', 'pug');

// Set top level routes
app.use('/workshop', workshopRouter);
app.use('/route', routeRouter);
app.use('/user', userRouter);
app.use('/api', apiRouter);
app.use('/blog', blogRouter);

// Redirect the user to the landing page if we don't recognize the route
app.get('*', (req, res) => {
	res.render('landing');
});

winston.log('info', "Server application created");

module.exports = app;