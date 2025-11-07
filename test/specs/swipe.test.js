const { expect } = require('@wdio/globals')
const Home = require('../pageobjects/home.page')
const Swipe = require('../pageobjects/swipe.page');

describe('Swipe Page Tests', () => {
    //===================================
    // HOOKS
    // ==================================

    before(async () => {
        // Wait HomePage and Swipe Page display
        await Home.waitForHomeDisplayed();
        await Swipe.openSwipeScreen();
    });

    after(async () => {
        // Quit application 
        await browser.back();
        await browser.back();
    });

    //===================================
    // TESTS
    // ==================================
    it('Should swipe carousel multiple times and see first and last card', async () => {
        allure.addSeverity('normal');
        allure.addFeature('Swipe');
        allure.addStory('Swipe All Items Of Carousel');

        // check first card
        const card1 = await $('android=new UiSelector().text("FULLY OPEN SOURCE")');
        expect(await card1.isExisting()).toBe(true);

        //swipe 5 times
        await Swipe.swipeCarouselMultipleTimes(5);

        // check last card
        const lastCard = await $('android=new UiSelector().text("COMPATIBLE")');
        expect(await lastCard.isExisting()).toBe(true);
    });

    it('Should display a text and to scroll until to display logo and texte hidden', async () => {
        allure.addSeverity('normal');
        allure.addFeature('Swipe');
        allure.addStory('Scroll Until Logo And Text Displayed');

        const verticalText = await Swipe.getVerticalText()
        expect(verticalText).toBe('Or swipe vertical to find what I\'m hiding.')

        await Swipe.swipeVerticalUp()

        //swipe 2 times
        await Swipe.swipeVerticalMultipleTimes(2);

        await Swipe.getHiddenLogo()

        const hiddenText = await Swipe.getHiddenLogoText()
        expect(hiddenText).toBe('You found me!!!')
    });

});