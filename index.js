require('dotenv').config();

const http = require('http');
const app = require('./app');

const port = 4242;

const Logger = require('./util/Logger');

const server = http.createServer(app);

server.listen(process.env.PORT || port, () => {
    Logger.info('Server listening', `Listening on port ${port}`);
});