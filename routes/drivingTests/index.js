const { Router } = require('express');
const router = Router();

const DrivingTestController = require('../../controllers/DrivingTestController');

router.get('/', DrivingTestController.nextTest);

router.post('/update', DrivingTestController.update);

module.exports = router;