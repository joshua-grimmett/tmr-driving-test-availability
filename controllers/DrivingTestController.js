
const DrivingTest = require('../models/DrivingTest');
const TMRService = require('../services/tmr');

class DrivingTestController {
    static async nextTest(req, _, next) {
        req.tests = await DrivingTest
            .find()
            .sort({ date: 1 })
            .limit(10)
            .exec();
        
        return next();
    }

    /**
     * Runs the availability script to check the latest available test on the TMR DB.
     * Takes around 30 seconds to complete
     * @param {Request} req Express request
     * @param {Resolve} res Express resolve
     */
    static update(_, res) {
        const tmr = new TMRService();

        tmr.getNextDate()
            .then(async date => {
                res.status(200).json({ date });
                const exists = await DrivingTest.exists({ date });
                if (exists) return;
                
                const drivingTest = new DrivingTest({
                    date,
                    region: tmr.details.region,
                    centre: tmr.details.centre,
                });

                drivingTest.save()
                    .then(doc => {
                        Logger.success(DrivingTestController.name, `Updated latest test to: ${doc.date}`);
                    })
            }).catch(error => {
                //res.status(500).json({ error });
            });
    }
}

module.exports = DrivingTestController;