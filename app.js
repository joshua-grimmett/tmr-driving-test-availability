/**
 * QLD Booking Checker Express App
 * The purpose of this app is to notify customers
 * of the soonest QLD driving test is available in a set region
 * @author Joshua Grimmett
 */
const express = require('express');
const app = express();

// Middleware
const Auth0 = require('./controllers/Auth0Controller');
Auth0.initialiseAuth0(app);

const middlewares = require('./middleware');
middlewares.forEach(middleware => middleware(app));

const routes = require('./routes');
routes.forEach(route => {
    route.endpoint
    ? app.use(route.endpoint, route.router)
    : app.use(route.router);
});


module.exports = app;