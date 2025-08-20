import { Page } from "@playwright/test";

//Button, Checkbox, Radio, Link

export class ClickPageExtension{
    page: Page;
    constructor(page){
        this.page = page
    }

    async ClickButtonByRole(buttonName){
        await this.page.getByRole('button', {name: buttonName}).click();
    }

    async ClickButtonBasedonIndexByRole(buttonName, index){
        await this.page.getByRole('button', {name: buttonName}).nth(index).click();
    }

    async ClickButtonByLocator(locator){
        await this.page.locator(locator).click();
    }

    
}