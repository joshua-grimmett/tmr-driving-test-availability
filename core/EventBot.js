const path = require('path');
const chrome = require('selenium-webdriver/chrome');
const { WebDriver } = require('selenium-webdriver');
const { WebElementPromise } = require('selenium-webdriver');
const { Builder, By, until } = require('selenium-webdriver');

const { urls, xpaths, selectors } = require('../config');


class EventBot {
    constructor({ driver }) {
        /**
         * @type {WebDriver}
         */
        this.driver = driver;
    }

    static async create(data) {
        // Service config
        const service = new chrome.ServiceBuilder(
            path.join(__dirname, '..', driverPath)
        )
        // Initialise driver with Chrome as browser
        const driver = await new Builder()
            .forBrowser('chrome')
            .setChromeService(service)
            .build();

        return new EventBot({ driver, ...data });
    }

    /**
     * Find WebElement by XPath
     * @param {String} path XPath String
     * @returns {WebElementPromise}
     */
    async xpath(path) {
        return await this.driver.findElement(By.xpath(path));
    }

    /**
     * Find WebElement by CSS Selector
     * @param {String} path CSS Selector Path
     * @returns {WebElementPromise}
     */
    async selector(path) {
        return await this.driver.findElement(By.xpath(path));
    }

    continuePage() {
        return new Promise(async (res, rej) => {
            // Go to login page
            await this.driver.get(urls.continuePage);
            
            // Click login
            (await this.xpath(xpaths.continueButton))
                .click();
            
            // Wait to load
            await this.driver.wait(until.titleContains('Accept terms of use'), 1000);

            res();
        });
    }

    acceptPage() {
        return new Promise (async (res, rej) => {
            // Click accept
            (await this.xpath(xpaths.acceptButton))
                .click();

            // Wait to load
            await this.driver.sleep(1000);

            res();
        })
    }

    bookingDetailsPage(details) {
        return new Promise (async (res, rej) => {
            // Enter booking reference number
            (await this.xpath(xpaths.brnInput))
                .sendKeys(details.brn);
            // Enter email
            (await this.xpath(xpaths.emailInput))
                .sendKeys(details.email);

            // Click continue
            (await this.xpath(xpaths.confirmBookingButton))
                .click();

            // Wait to load
            await this.driver.sleep(1000);

            res();
        })
    }

    confirmBookingDetailsPage() {
        return new Promise (async (res) => {
            // Click accept
            (await this.xpath(xpaths.confirmBookingDetailsButton))
                .click();

            // Wait to load
            await this.driver.sleep(3000);

            res();
        })
    }

    locationPage({ region }) {
        return new Promise(async (res) => {
            // Open region
            await this.setRegion(region);

            // Continue
            (await this.xpath(xpaths.confirmLocationButton))
                .click();

            await this.driver.sleep(3000);

            res();
        });
    }

    setRegion(region) {
        return new Promise(async (res) => {
            // Open date picker
            (await this.xpath(xpaths.openRegionButton))
                .click()
                .then(async () => {
                    // Select
                    (await this.selector(selectors.region(region)))
                        .click()
                        .then(() => res());
                });
        });
    }

    nextDate() {
        return new Promise(async res => {
            (await this.xpath(xpaths.availableDate))
                .getText()
                .then(text => res(text));
        })
    }
}

module.exports = EventBot;