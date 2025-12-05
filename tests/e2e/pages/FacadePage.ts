import { Page, Locator } from '@playwright/test'
import { BasePage } from './BasePage'

export class FacadePage extends BasePage {
    readonly page: Page;
    private readonly userListCardsLoc : Locator;
    private readonly fullNameOnDetailsLoc : Locator;
    private readonly closeDetailsButtonLoc : Locator;


    constructor(page: Page) {
        super(page, '/facade')
        this.page = page;        
        this.userListCardsLoc = this.page.locator('lib-user-card');
        this.fullNameOnDetailsLoc = this.page.locator('mat-card-title');
        this.closeDetailsButtonLoc = this.page.locator('mat-dialog-container lib-button');
    }

    async getXUserName(rowCount: number) : Promise<string> {
        let firstName = (await this.userListCardsLoc.nth(rowCount).locator('div h2').nth(0).innerText()).trim();
        let lastName = (await this.userListCardsLoc.nth(rowCount).locator('div h2').nth(1).innerText()).trim();
        return `${firstName} ${lastName}`
    }

    async openXUserDetails(rowCount: number) {
        await this.userListCardsLoc.nth(rowCount).locator('lib-button', {hasText: 'Details'}).click();
    }

    async getFullNameFromOpenedDetails() : Promise<string> {
        return (await this.fullNameOnDetailsLoc.innerText()).trim();
    }

    async closeUserDetails() {
        await this.closeDetailsButtonLoc.click();
    }
}
