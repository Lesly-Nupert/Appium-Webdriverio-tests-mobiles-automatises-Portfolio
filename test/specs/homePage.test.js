// Home Page Tests
const { expect } = require('@wdio/globals')
const HomePage = require('../pageobjects/home.page')

describe('Home Page Tests', () => {
    it('Home Page displayed with logo and title', async () => {
        await HomePage.openHomePage();
        await expect(HomePage.homeScreen.isDisplayed());

        await HomePage.clickLogo();
        await expect(HomePage.logo.isDisplayed());

        await HomePage.clickHomePageTitle();
        await expect(HomePage.homePageTitle.isDisplayed());
    });
});    


