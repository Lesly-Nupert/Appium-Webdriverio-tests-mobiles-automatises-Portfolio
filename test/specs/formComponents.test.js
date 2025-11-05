const { expect, browser } = require('@wdio/globals')
const HomePage = require('../pageobjects/home.page')
const FormComponentsPage = require('../pageobjects/formComponents.page')

describe('Form Components Tests', () => {
    //===================================
    // HOOKS
    // ==================================

    before(async () => {
        // Wait HomePage and formComponents display
        await HomePage.waitForHomePageDisplayed();
        await FormComponentsPage.openFormComponents();
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
        await FormComponentsPage.fillFormComponents('Tests Appium Mobile')
        
        const enteredtext = await FormComponentsPage.waitEnteredText()
        expect(enteredtext).toBe('Tests Appium Mobxxx')   //! ERRRROOOOOOORRRRRRRRRR

    });

    it('Should check initial status then switch and back to initial status', async () => {
        const isOn = await FormComponentsPage.isSwitchOn()
        expect(isOn).toBe(false)

        const textOn = await FormComponentsPage.SwitchText()
        expect(textOn).toBe('Click to turn the switch ON')

        await FormComponentsPage.clickSwitchButton()

        const isOff = await FormComponentsPage.isSwitchOn()
        expect(isOff).toBe(false)

        const textOff = await FormComponentsPage.SwitchText()
        expect(textOff).toBe('Click to turn the switch OFF')

        await FormComponentsPage.clickSwitchButton()

        const isOn2 = await FormComponentsPage.isSwitchOn()
        expect(isOn2).toBe(false)

        const textOn2 = await FormComponentsPage.SwitchText()
        expect(textOn2).toBe('Click to turn the switch ON')
    });

    it('Should count all items of dropdown', async () => {
        await FormComponentsPage.openDropdown()
        const count = await FormComponentsPage.countItemsOfDropdown()
        expect(count).toBe(4)
        
        await browser.back();
    });

    it('Should click an item and display it ', async () => {
        
        await FormComponentsPage.openDropdown()
        await FormComponentsPage.selectItemByText('Appium is awesome')

        const selectedText = await FormComponentsPage.getDropdownSelectedText();
        expect(selectedText).toBe('Appium is awesome')
    });

    it('Should click active btn, display popup and click OK ', async () => {
        await FormComponentsPage.clikActiveButton()
        
        const message = await FormComponentsPage.popupActiveButton()
        expect(message).toBe('This button is active')

        await FormComponentsPage.clikOkButton()
    });
});