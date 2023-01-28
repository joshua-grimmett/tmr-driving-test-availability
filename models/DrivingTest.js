const mongoose = require('mongoose');
const { Schema } = mongoose;

const drivingTestSchema = new Schema({
    date: { 
        type: Date,
        unique: true
    },
    region: {
        type: String
    },
    centre: {
        type: String
    }
}, {    
    timestamps: true
});

module.exports = mongoose.models.DrivingTest || mongoose.model('DrivingTest', drivingTestSchema);