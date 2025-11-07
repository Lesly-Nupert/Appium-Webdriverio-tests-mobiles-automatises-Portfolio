const { expect } = require('@wdio/globals')
const Home = require('../pageobjects/home.page')
const DragAndDrop = require('../pageobjects/dragAndDrop.page');

describe('Drag And Drop Tests', () => {
    //===================================
    // HOOKS
    // ==================================

    before(async () => {
        // Wait HomeScreen and Drag and Drop Page display
        await Home.waitForHomeDisplayed();
        await DragAndDrop.openDragAndDropScreen();

        const title = await DragAndDrop.getDragAndDropTitle()
        expect(title).toBe('Drag and Drop')
    });

    after(async () => {
        // Quit application 
        await browser.back();
        await browser.back();
    });

    //===================================
    // TESTS
    // ==================================

    it('Should drag and drop all elements, display success message, display retry text and button for return to Drag and Drop Page', async () => {
        allure.addSeverity('normal');
        allure.addFeature('Drag And Drop');
        allure.addStory('Valid Drag And Drop');
        
        await DragAndDrop.dragAndDropL2()
        await expect(DragAndDrop.draggableL2).not.toBeDisplayed()
     
        await DragAndDrop.dragAndDropR3()
        await expect(DragAndDrop.draggableR3).not.toBeDisplayed()
    
        await DragAndDrop.dragAndDropR1()
        await expect(DragAndDrop.draggableR1).not.toBeDisplayed()
    
        await DragAndDrop.dragAndDropC1()
        await expect(DragAndDrop.draggableC1).not.toBeDisplayed()
    
        await DragAndDrop.dragAndDropC3()
        await expect(DragAndDrop.draggableC3).not.toBeDisplayed()
    
        await DragAndDrop.dragAndDropR2()
        await expect(DragAndDrop.draggableR2).not.toBeDisplayed()

        await DragAndDrop.dragAndDropC2()
        await expect(DragAndDrop.draggableC2).not.toBeDisplayed()
    
        await DragAndDrop.dragAndDropL1()
        await expect(DragAndDrop.draggableL1).not.toBeDisplayed()
    
        await DragAndDrop.dragAndDropL3()
        await expect(DragAndDrop.draggableL3).not.toBeDisplayed()

        const message = await DragAndDrop.getSuccessMessage();
        expect(message).toBe('Congratulations');
        
        const retryText = await DragAndDrop.getRetryText();
        expect(retryText).toBe('You made it, click retry if you want to try it again.');

        await DragAndDrop.clickRetryButton()

        const checkTitle = await DragAndDrop.getDragAndDropTitle();
        expect(checkTitle).toBe('Drag and Drop');
    });
});