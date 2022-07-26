const Logger = require('../../util/Logger');

class SMSService {
    constructor(key) {
        if (!key) Logger.error('SMS Service', 'No authentication key provided');
        this.key = key;
    }   

    
}