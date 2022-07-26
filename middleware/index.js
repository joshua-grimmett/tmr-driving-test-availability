const path = require('path');
const express = require('express');
const { Express } = express;

module.exports = [
    /**
     * Public files
     */
    app => {
        app.use(express.static(path.join(__dirname, '..', 'public')))
    },
    /**
     * 
     * @param {Express} app 
     */
    app => {
        app.set('view engine', 'pug');
    },
    /**
     * Users
     * @param {Express} app 
     */
    app => {
        // Middleware to make the `user` object available for all views
        app.use(function (req, res, next) {
            res.locals.user = req.oidc.user;
            next();
        });  
    }
]