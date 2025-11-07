/**
 * Drag And Drop Page Object
 * Contains selectors and methods
 */

class DragAndDrop {
    //===================================
    // SELECTORS
    // ==================================

    // Open Drag and Drop Screen
    get dragAndDropScreen() { return $('~Drag') };

    // Get title "Drag and Drop"
    get dragAndDropTitle() {
        return $('android=new UiSelector().text("Drag and Drop")')
    };

    // Get Draggable Element ------------------------------------
    
    get draggableL2() { return $('~drag-l2') };
    get draggableR3() { return $('~drag-r3') };
    get draggableR1() { return $('~drag-r1') };
    get draggableC1() { return $('~drag-c1') };
    get draggableC3() { return $('~drag-c3') };
    get draggableR2() { return $('~drag-r2') };
    get draggableC2() { return $('~drag-c2') };
    get draggableL1() { return $('~drag-l1') };
    get draggableL3() { return $('~drag-l3') };

    // Get Drop Element -----------------------------------------

    get dropL2() {return $('~drop-l2') };
    get dropR3() {return $('~drop-r3') };
    get dropR1() {return $('~drop-r1') };
    get dropC1() {return $('~drop-c1') };
    get dropC3() {return $('~drop-c3') };
    get dropR2() {return $('~drop-r2') };
    get dropC2() {return $('~drop-c2') };
    get dropL1() {return $('~drop-l1') };
    get dropL3() {return $('~drop-l3') };


    // Get success message "Congratulations"
    get successMessage() {
        return $('android=new UiSelector().text("Congratulations")')
    };

    // Get text "retry...."
    get retryText() {
        return $('android=new UiSelector().text("You made it, click retry if you want to try it again.")')
    };

    // Get Button "Retry"
    get retryButton() { return $('~button-Retry') };

    // Get symbole "Renew"
    get renewSymbole() { return $('~renew') };


    //===================================
    // ACTIONS
    // ==================================

    // Open drag And Drop Screen
    async openDragAndDropScreen() {
        await this.dragAndDropScreen.waitForDisplayed();
        await this.dragAndDropScreen.click();
        await this.dragAndDropTitle.waitForDisplayed();
    };

    // Get title "Drag And Drop" 
    async getDragAndDropTitle() {
        await this.dragAndDropTitle.waitForDisplayed();
        return await this.dragAndDropTitle.getText();
    };

    // Drag And Drop Element L2
    async dragAndDropL2() {
        await this.draggableL2.waitForDisplayed()
        await this.dropL2.waitForDisplayed()
        await this.draggableL2.dragAndDrop(this.dropL2)
    }

    // Drag And Drop Element R3
    async dragAndDropR3() {
        await this.draggableR3.waitForDisplayed()
        await this.dropR3.waitForDisplayed()
        await this.draggableR3.dragAndDrop(this.dropR3)
    }

    // Drag And Drop Element R1
    async dragAndDropR1() {
        await this.draggableR1.waitForDisplayed()
        await this.dropR1.waitForDisplayed()
        await this.draggableR1.dragAndDrop(this.dropR1)
    }

    // Drag And Drop Element C1
    async dragAndDropC1() {
        await this.draggableC1.waitForDisplayed()
        await this.dropC1.waitForDisplayed()
        await this.draggableC1.dragAndDrop(this.dropC1)
    }

    // Drag And Drop Element C3
    async dragAndDropC3() {
        await this.draggableC3.waitForDisplayed()
        await this.dropC3.waitForDisplayed()
        await this.draggableC3.dragAndDrop(this.dropC3)
    }

    // Drag And Drop Element R2
    async dragAndDropR2() {
        await this.draggableR2.waitForDisplayed()
        await this.dropR2.waitForDisplayed()
        await this.draggableR2.dragAndDrop(this.dropR2)
    }

    // Drag And Drop Element C2
    async dragAndDropC2() {
        await this.draggableC2.waitForDisplayed()
        await this.dropC2.waitForDisplayed()
        await this.draggableC2.dragAndDrop(this.dropC2)
    }

    // Drag And Drop Element L1
    async dragAndDropL1() {
        await this.draggableL1.waitForDisplayed()
        await this.dropL1.waitForDisplayed()
        await this.draggableL1.dragAndDrop(this.dropL1)
    }

    // Drag And Drop Element L3
    async dragAndDropL3() {
        await this.draggableL3.waitForDisplayed()
        await this.dropL3.waitForDisplayed()
        await this.draggableL3.dragAndDrop(this.dropL3)
    }

    // Get success message "Congratulations"
    async getSuccessMessage() {
        await this.successMessage.waitForDisplayed();
        return await this.successMessage.getText();
    };

    // Get retry text
    async getRetryText() {
        await this.retryText.waitForDisplayed();
        return await this.retryText.getText();
    };

    // Get retry button
    async clickRetryButton() {
        await this.retryButton.waitForDisplayed();
        await this.retryButton.click();
    };

    // Get renew symbole
    async clickRenewSymbole() {
        await this.RenewSymbole.waitForDisplayed();
        await this.RenewSymbole.click();
    };
}

module.exports = new DragAndDrop();