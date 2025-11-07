/**
 * Form Components Page Object
 * Contains selectors and methods for interacting with the Form Components page.
 */

class FormComponents {
    //===================================
    // SELECTORS
    // ==================================

    // FORM ============================

    // Open form components
    get formComponents() { return $('~Forms') };

    // Verify text "Form components"
    get formComponentsText() { return $('android=new UiSelector().text("Form components")') };

    // INPUT FIELD ============================

    // Get input field
    get inputField() { return $('~text-input') };

    // Get input text result
    get inputTextResult() { return $('~input-text-result') };

    // SWITCH ============================

    // Get switch
    get switchButton() { return $('~switch') };

    // Get switch text - (2 textes à verifier : Click to turn the switch ON and Click to turn the switch OFF)
    get switchText() { return $('~switch-text') };

    // DROPDOWN ============================

    // Open dropdown
    get dropdown() { return $('~Dropdown') };

    // get dropdown() { return $('android=new UiSelector().resourceId("android_touchable_wrapper")') };

    // Get text of dropdown
    get dropdownText() { return $('android=new UiSelector().resourceId("text_input")') };

    // Get all items in dropdown - list
    get dropdownItems () { return $$('android=new UiSelector().resourceId("android:id/text1")') };


    // BUTTONS ============================
    
    // Get active button
    get activeButton() { return $('~button-Active') };

    // get activeButton() { return $('android=new UiSelector().description("button-Active")') };

    // Get active message
    get activeMessage() { return $('android=new UiSelector().resourceId("android:id/message")') };

    // Get button OK
    get okButton() { return $('android=new UiSelector().resourceId("android:id/button1")') };

    //===================================
    // ACTIONS
    // ==================================

    // Open form components
    async openFormComponents() {
        await this.formComponents.waitForDisplayed();
        await this.formComponents.click();
        await this.formComponentsText.waitForDisplayed();
    };

    // fill input field 
    async fillFormComponents(text) { 
        await this.inputField.clearValue();
        await this.inputField.setValue(text);
    };

    // Verify entered text
    async waitEnteredText() {
        await this.inputTextResult.waitForDisplayed();
        return await this.inputTextResult.getText();
    };

    // --------------------------------------------------

    // Click switch button
    async clickSwitchButton() {
        await this.switchButton.waitForDisplayed();
        await this.switchButton.click();
    };

    // Check toggle Button is ON
    async isSwitchOn() {
        return await this.switchButton.isSelected();
    };

    // Verify message toggle button
    async SwitchText() {
        await this.switchText.waitForDisplayed();
        return await this.switchText.getText();
    };

    // --------------------------------------------------

    // Open dropdown
    async openDropdown() {
        await this.dropdown.waitForDisplayed();
        await this.dropdown.click();
    };

    // Count items of dropdown
    async countItemsOfDropdown() {
        await browser.waitUntil(async () => {
            const items = await this.dropdownItems;
            return items.length > 0;
    }, { timeout: 5000, timeoutMsg: 'Dropdown items no appeared' });

        const items = await this.dropdownItems
        
        console.log('DEBUG ------ Nombre d\'items trouvés:', items.length);
        return items.length;
    };

    // Select item by text with dynamique selector
    async selectItemByText(text) {
    const item = $(`android=new UiSelector().resourceId("android:id/text1").text("${text}")`);
    await item.waitForDisplayed();
    await item.click();
    };

    // Get dropdown selected text
    async getDropdownSelectedText() {
    await this.dropdownText.waitForDisplayed();
    return await this.dropdownText.getText();
    };

    // --------------------------------------------------

    // Click active button
    async clikActiveButton() {
        await this.activeButton.waitForDisplayed();
        await this.activeButton.click();
    };

    // Popup active button
    async popupActiveButton() {
        await this.activeMessage.waitForDisplayed();
        return await this.activeMessage.getText();
    };
    
    // Click OK button to close popup
    async clikOkButton() {
        await this.okButton.waitForDisplayed();
        await this.okButton.click();
    };
};

// Export instance
module.exports = new FormComponents();