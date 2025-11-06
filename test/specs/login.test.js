const { expect } = require('@wdio/globals')
const HomePage = require('../pageobjects/home.page')
const LoginPage = require('../pageobjects/login.page')

describe('Login Form Tests', () => {
    //===================================
    // HOOKS
    // ==================================

    before(async () => {
        // Wait HomePage display
        await HomePage.waitForHomePageDisplayed();
    });

    beforeEach(async () => {
        // Wait reset login form
        await LoginPage.openLoginFormAndClearFields();
    });
    
    after(async () => {
        // Quit application 
        await browser.back();
        await browser.back();
        
    });

    //===================================
    // TESTS
    // ==================================
    it('Should display success message after login', async () => {
        allure.addSeverity('critical');
        allure.addFeature('Authentication');
        allure.addStory('Valid Login');

        await LoginPage.fillFormLogin('test@test.com', 'password')
        
        const successTitle = await LoginPage.waitForSuccessPopupTitle()
        expect(successTitle).toBe('Success')

        const successMessage = await LoginPage.waitForSuccessPopupMessage()
        expect(successMessage).toBe('You are logged in!')

        const okButton = await LoginPage.waitForSuccessPopupButtonOk()
        expect(okButton).toBe('OK')

        await LoginPage.okButton.click()
    });

    it('Should display error messages after connexion', async () => {
        allure.addSeverity('critical');
        allure.addFeature('Authentication');
        allure.addStory('Invalid Login');
        
        await LoginPage.fillFormLogin('test@test', 'pass')

        const emailErrorMessage = await LoginPage.waitForErrorMessageForEmail()
        expect(emailErrorMessage).toBe('Please enter a valid email address')

        const passwordErrorMessage = await LoginPage.waitForErrorMessageForPassword()
        expect(passwordErrorMessage).toBe('Please enter at least 8 characters')
    });
});