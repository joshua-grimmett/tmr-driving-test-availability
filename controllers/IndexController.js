
class IndexController {
    static renderIndex(req, res) {
        res.render('index', { tests: req.tests, moment: require('moment') });
    }   
}

module.exports = IndexController;