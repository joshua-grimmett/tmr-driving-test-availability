const { auth } = require('express-openid-connect');

class Auth0Controller {
    static get config() {
        return {
            authRequired: false,
            auth0Logout: true,
            secret: process.env.AUTH0_SECRET,
            baseURL: process.env.AUTH0_BASE_URL,
            clientID: process.env.AUTH0_CLIENT_ID,
            issuerBaseURL: process.env.AUTH0_ISSUER_URL
        }
    }

    static initialiseAuth0(app) {
        app.use(auth(Auth0Controller.config));
    }
}

module.exports = Auth0Controller;