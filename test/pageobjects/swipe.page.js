/**
 * Swipe Page Object
 * Contains selectors and methods
 */

class Swipe {
    //===================================
    // SELECTORS
    // ==================================

    // Open Swipe
    get swipeScreen() { return $('~Swipe') };

    // HORIZONTAL ========================

    // Get text swipe horizontal
    get swipeHorizontalText() {
        return $('android=new UiSelector().text("Swipe horizontal")')
    };

    // Get carousel
    get carousel() { return $('~Carousel') };

    // Get all cards in carousel
    get carouselCards() {
        return $$('android=new UiSelector().className("android.view.ViewGroup")');
    }

    // VERTICAL ==========================

    // Get text swipe vertical
    get swipeVerticalText() {
        return $('android=new UiSelector().text("Or swipe vertical to find what I\'m hiding.")')
    };

    // Get hidden logo
    get hiddenWebdriverIoLogo() { return $('~WebdriverIO logo') };

    // Get hidden text
    get hiddenLogoText() {
        return $('android=new UiSelector().text("You found me!!!")')
    };

    //===================================
    // ACTIONS
    // ==================================

    // Open swipe screen
    async openSwipeScreen() {
        await this.swipeScreen.waitForDisplayed();
        await this.swipeScreen.click();
        await this.swipeHorizontalText.waitForDisplayed();
    };

    // SWIPE HORIZONTAL ---------------------------

    // Get horizontal text
    async getHorizontalText() {
        await this.swipeHorizontalText.waitForDisplayed();
        return await this.swipeHorizontalText.getText();
    };

    // Swipe left 1x
    async swipeHorizontalLeft() {
        await driver.swipe({
            direction: 'left',
            duration: 100,
            percent: 0.1,
            scrollableElement: await this.carousel
        })
    };

    // Swipe left N times - put 5
    async swipeCarouselMultipleTimes(times) {
        for (let i = 0; i < times; i++) {
            await this.swipeHorizontalLeft();
            await browser.pause(500);
        }
    };


    // SWIPE VERTICAL -------------------------------


    // Get vertical text
    async getVerticalText() {
        await this.swipeVerticalText.waitForDisplayed();
        return await this.swipeVerticalText.getText();
    };

    // Swipe up 1x
    async swipeVerticalUp() {
        await browser.action('pointer', {
            parameters: { pointerType: 'touch' }
        })
            .move({
                x: 200,
                y: 1000
            })
            .down()
            .pause(200)
            .move({
                x: 200,
                y: 100
            })
            .up()
            .perform();
    };

    // Swipe up N times - put 3
    async swipeVerticalMultipleTimes(times) {
        for (let i = 0; i < times; i++) {
            await this.swipeVerticalUp();
            await browser.pause(500);
        }
    };

    // Get hidden logo after scroll
    async getHiddenLogo() {
        await this.hiddenWebdriverIoLogo.waitForDisplayed();
    };

    // Get hidden logo text after scroll
    async getHiddenLogoText() {
        await this.hiddenLogoText.waitForDisplayed();
        return await this.hiddenLogoText.getText();
    };
}

module.exports = new Swipe();