import { Page } from "@playwright/test";

export class SetPageExtension{
    page: Page;

    constructor(page){
        this.page = page;

    }

    async SetTextboxValueByPlaceholder(placeholderText, textboxValue){
        await this.page.getByPlaceholder(placeholderText).fill(textboxValue)
    }

    async SetTextboxValueByLocator(locator, textboxValue){
        await this.page.locator(locator).fill(textboxValue);
    }

    async SetTextboxValueByDataTestId(testId, textboxValue){
        await this.page.getByTestId(testId).fill(textboxValue);
    }

}