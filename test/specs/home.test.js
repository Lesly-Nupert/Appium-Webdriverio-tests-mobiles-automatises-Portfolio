// Home Page Tests
const { expect } = require('@wdio/globals')
const Home = require('../pageobjects/home.page')

describe('Home Page Tests', () => {
    it('Home Page displayed with logo and title', async () => {
        allure.addSeverity('blocker');
        allure.addFeature('Home');
        allure.addStory('Home Screen Displayed');

        await Home.waitForHomeDisplayed();
        await expect(Home.homeScreen).toBeDisplayed();

        await Home.clickLogo();
        await expect(Home.logo).toBeDisplayed();

        await Home.clickHomeTitle();
        await expect(Home.HomeTitle).toBeDisplayed();
    });
});    


