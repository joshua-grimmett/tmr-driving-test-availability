const { Router } = require('express');
const router = Router();

const IndexController = require('../../controllers/IndexController');
const DrivingTestController = require('../../controllers/DrivingTestController');

router.get('/', DrivingTestController.nextTest, IndexController.renderIndex);

module.exports = router;