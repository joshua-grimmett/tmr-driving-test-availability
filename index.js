/**
 * Selenium Application to automate
 * Transport and Main Roads driving test
 * availability checking.
 * @author Joshua Grimmett
 * @date 18/7/2022
 */
require('dotenv').config();
const details = require('./details')

const EventBot = require('./core/EventBot');

EventBot
    .create({
        driverPath: process.argv[2] || 'chromedriver_MacOS_m1_v103'
    })
    .then(async bot => {
        await bot.continuePage();
        await bot.acceptPage();
        await bot.bookingDetailsPage(details);
        await bot.confirmBookingDetailsPage();
        await bot.locationPage(details);
        
        const nextDate = await bot.nextDate();
        console.log(nextDate);
    });