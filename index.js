/**
 * Selenium Application to automate
 * AttendMe event creation for Glow College
 * @author Joshua Grimmett
 * @date 22/4/2022
 */
require('dotenv').config();
const details = require('./details')

const EventBot = require('./core/EventBot');

EventBot
    .create()
    .then(async bot => {
        await bot.continuePage();
        await bot.acceptPage();
        await bot.bookingDetailsPage(details);
        await bot.confirmBookingDetailsPage();
        await bot.locationPage(details);
        
        const nextDate = await bot.nextDate();
        console.log(nextDate);
    });