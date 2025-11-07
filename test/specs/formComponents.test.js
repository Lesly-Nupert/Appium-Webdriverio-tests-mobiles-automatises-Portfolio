const { expect, browser } = require('@wdio/globals')
const Home = require('../pageobjects/home.page')
const FormComponents = require('../pageobjects/formComponents.page')

describe('Form Components Tests', () => {
    //===================================
    // HOOKS
    // ==================================

    before(async () => {
        // Wait HomePage and formComponents display
        await Home.waitForHomeDisplayed();
        await FormComponents.openFormComponents();
    });
    
    after(async () => {
        // Quit application 
        await browser.back();
        await browser.back();
    });

    //===================================
    // TESTS
    // ==================================
    it('Should fill input field and display entered text', async () => {
        allure.addSeverity('normal');
        allure.addFeature('Form Components');
        allure.addStory('Entered Text Displayed');

        await FormComponents.fillFormComponents('Tests Appium Mobile')
        
        const enteredtext = await FormComponents.waitEnteredText()
        expect(enteredtext).toBe('Tests Appium Mobile')

    });

    it('Should check initial status then switch and back to initial status', async () => {
        allure.addSeverity('normal');
        allure.addFeature('Form Components');
        allure.addStory('Check Switch Status');

        const isOn = await FormComponents.isSwitchOn()
        expect(isOn).toBe(false)

        const textOn = await FormComponents.SwitchText()
        expect(textOn).toBe('Click to turn the switch ON')

        await FormComponents.clickSwitchButton()

        const isOff = await FormComponents.isSwitchOn()
        expect(isOff).toBe(false)

        const textOff = await FormComponents.SwitchText()
        expect(textOff).toBe('Click to turn the switch OFF')

        await FormComponents.clickSwitchButton()

        const isOn2 = await FormComponents.isSwitchOn()
        expect(isOn2).toBe(false)

        const textOn2 = await FormComponents.SwitchText()
        expect(textOn2).toBe('Click to turn the switch ON')
    });


    it('Should click an item and display it ', async () => {
        allure.addSeverity('normal');
        allure.addFeature('Form Components');
        allure.addStory('Selected Text Displayed');
        
        await FormComponentsPage.openDropdown()
        await FormComponentsPage.selectItemByText('Appium is awesome')

        const selectedText = await FormComponentsPage.getDropdownSelectedText();
        expect(selectedText).toBe('Appium is awesome')
    });

    it('Should click active btn, display popup and click OK ', async () => {
        allure.addSeverity('normal');
        allure.addFeature('Form Components');
        allure.addStory('Popup With Btn "OK" Displayed');

        await FormComponentsPage.clikActiveButton()
        
        const message = await FormComponentsPage.popupActiveButton()
        expect(message).toBe('This button is active')

        await FormComponentsPage.clikOkButton()
    });

    it('Should count all items of dropdown', async () => {
        allure.addSeverity('normal');
        allure.addFeature('Form Components');
        allure.addStory('Count All Items Of Dropdown');

        await FormComponentsPage.openDropdown()
        const count = await FormComponentsPage.countItemsOfDropdown()
        expect(count).toBe(4)
        
        await browser.back();
    });
});