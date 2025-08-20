import { Page } from "@playwright/test";

//innerText, allInnerText, inputValue

export class GetPageExtension{

    page: Page;
    constructor(page){
        this.page = page;
    }


    async retriveTextboxValueByPlaceholder (placeholderText: string){
        let textboxValue = await this.page.getByPlaceholder(placeholderText).inputValue();
        return textboxValue;
    }

    async retriveTextboxValueByLocator(locator){
        await this.page.locator(locator).inputValue();
    }

    async retriveTextboxValueByRole(placeholderText){
        await this.page.getByRole('textbox', {name: placeholderText})
    }

}