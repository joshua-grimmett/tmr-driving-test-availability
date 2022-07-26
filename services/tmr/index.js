
const Logger = require('../../util/Logger');

class TMRService {
    constructor(details) {
        if (!details) Logger.error('TMR Service', 'No details (details.json) provided');
        this.details = details;
    }   

    
}

module.exports = TMRService;