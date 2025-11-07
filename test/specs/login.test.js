const { expect } = require('@wdio/globals')
const Home = require('../pageobjects/home.page')
const Login = require('../pageobjects/login.page')

describe('Login Form Tests', () => {
    //===================================
    // HOOKS
    // ==================================

    before(async () => {
        // Wait HomePage display
        await Home.waitForHomeDisplayed();
    });

    beforeEach(async () => {
        // Wait reset login form
        await Login.openLoginFormAndClearFields();
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

        await Login.fillFormLogin('test@test.com', 'password')
        
        const successTitle = await Login.waitForSuccessPopupTitle()
        expect(successTitle).toBe('Success')

        const successMessage = await Login.waitForSuccessPopupMessage()
        expect(successMessage).toBe('You are logged in!')

        const okButton = await Login.waitForSuccessPopupButtonOk()
        expect(okButton).toBe('OK')

        await Login.okButton.click()
    });

    it('Should display error messages after connexion', async () => {
        allure.addSeverity('critical');
        allure.addFeature('Authentication');
        allure.addStory('Invalid Login');
        
        await Login.fillFormLogin('test@test', 'pass')

        const emailErrorMessage = await Login.waitForErrorMessageForEmail()
        expect(emailErrorMessage).toBe('Please enter a valid email address')

        const passwordErrorMessage = await Login.waitForErrorMessageForPassword()
        expect(passwordErrorMessage).toBe('Please enter at least 8 characters')
    });
});