// Home Page Tests
const { expect } = require('@wdio/globals')
const HomePage = require('../pageobjects/home.page')

describe('Home Page Tests', () => {
    it('Home Page displayed with logo and title', async () => {
        allure.addSeverity('blocker');
        allure.addFeature('Home');
        allure.addStory('Home Screen Displayed');

        await HomePage.waitForHomePageDisplayed();
        await expect(HomePage.homeScreen).toBeDisplayed();

        await HomePage.clickLogo();
        await expect(HomePage.logo).toBeDisplayed();

        await HomePage.clickHomePageTitle();
        await expect(HomePage.homePageTitle).toBeDisplayed();
    });
});    


