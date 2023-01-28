const os = require('os');
const path = require('path');
const moment = require('moment');
const { exec } = require('child_process');

const Logger = require('../../util/Logger');

const config = require('./config');
const tmrDateFormat = 'dddd, DD MMMM YYYY hh:mm A';

class TMRService {
    constructor() {
        this.os = os.type();
        this.driver = config.drivers[this.os];
        this.driverPath = path.join(__dirname, 'lib', this.driver);
    }   

    getNextDate() {
        return new Promise((res, rej) => {
            const scriptPath = path.join(__dirname, 'bin', 'nextDate');
            // Run Selenium script
            exec(`${scriptPath} ${this.driverPath}`, (error, stdout, stderr) => {
                error || stderr
                    ? rej(error || stderr)
                    : res(moment(stdout, tmrDateFormat));
            });
        });
    }
}

module.exports = TMRService;