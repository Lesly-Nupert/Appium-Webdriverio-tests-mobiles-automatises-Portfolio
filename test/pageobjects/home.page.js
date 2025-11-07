/**
 * Home Page Object
 * Contains selectors and methods for interacting with the home page.
 */

class Home {
    //===================================
    // SELECTORS
    // ==================================

    // Get Home
    get homeScreen() { return $('~Home-screen') };

    // Get first logo "webdriverIO"
    get logo() { return $('android=new UiSelector().className("android.widget.ImageView").instance(0)') };

    // Get title Home "WEBDRIVER"
    get HomeTitle() { return $('android=new UiSelector().text("WEBDRIVER")') };


    //===================================
    // ACTIONS
    // ==================================

    // Open Home Page
    async waitForHomeDisplayed() {
        await this.homeScreen.waitForDisplayed();
    };

    // Click Logo
    async clickLogo() {
        await this.logo.waitForDisplayed();
        await this.logo.click();
    };

    // Click Home Page Title
    async clickHomeTitle() {
        await this.HomeTitle.waitForDisplayed();
        await this.HomeTitle.click();
    };
};

// Export instance
module.exports = new Home();
