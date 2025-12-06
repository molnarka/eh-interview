import { Page, Locator } from '@playwright/test'

export class BasePage {
    readonly page : Page;
    protected pageUrl : string;


    constructor(page: Page, pageUrl : string) {
        this.page = page;
        this.pageUrl = pageUrl;
    }

    async navigateToPage() {
        await this.page.goto(this.pageUrl);
    }
}