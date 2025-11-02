/**
 * Home Page Object
 * Contains selectors and methods for interacting with the home page.
 */

class HomePage {
    //===================================
    // SELECTORS
    // ==================================

    // Get Home Screen
    get homeScreen() { return $('~Home-screen') };

    // Get first logo "webdriverIO"
    get logo() { return $('android=new UiSelector().className("android.widget.ImageView").instance(0)') };

    // Get title HomePage "WEBDRIVER"
    get homePageTitle() { return $('android=new UiSelector().text("WEBDRIVER")') };


    //===================================
    // ACTIONS
    // ==================================

    // Open Home Screen
    async openHomePage() {
        await this.homeScreen.waitForDisplayed({ timeout: 5000 });
    };

    // Click Logo
    async clickLogo() {
        await this.logo.waitForDisplayed({ timeout: 5000 });
        await this.logo.click();
    };

    // Click Home Page Title
    async clickHomePageTitle() {
        await this.homePageTitle.waitForDisplayed({ timeout: 5000 });
        await this.homePageTitle.click();
    };
};

// Export instance
module.exports = new HomePage();
