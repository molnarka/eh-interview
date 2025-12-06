import { Page, Locator } from '@playwright/test'
import { BasePage } from './BasePage'

export class SignalPage extends BasePage {
    readonly page: Page;
    private readonly incrementButtonLoc : Locator;
    private readonly decrementButtonLoc : Locator;
    private readonly resetButtonLoc : Locator;
    private readonly singleCounterLoc : Locator;
    private readonly doubleCounterLoc : Locator;
    private readonly resultTextLoc: Locator;

    constructor(page: Page) {
        super(page, '/signal')
        this.page = page;        
        this.incrementButtonLoc = this.page.getByRole('button', { name: 'Increment' });
        this.decrementButtonLoc = this.page.getByRole('button', { name: 'Decrement' });
        this.resetButtonLoc = this.page.getByRole('button', { name: 'RESET' });
        this.singleCounterLoc = this.page.locator('app-signal-sample div h2').first();
        this.doubleCounterLoc = this.page.locator('app-signal-sample div h2').nth(1);
        this.resultTextLoc = this.page.locator('app-signal-sample div h2').nth(2);
    }

    async incrementCounter() {
        await this.incrementButtonLoc.click();
    }

    async decrementCounter() {
        await this.decrementButtonLoc.click();
    }

    async resetCounter() {
        await this.resetButtonLoc.click();
    }

    async getSingleCounter(): Promise<string> {
        return (await this.singleCounterLoc.innerText({timeout: 3000})).trim();
    }

    async getDoubleCounter(): Promise<string> {
        return (await this.doubleCounterLoc.innerText({timeout: 3000})).trim();
    }

    async getResultText(): Promise<string> {
        return (await this.resultTextLoc.innerText({timeout: 3000})).trim();
    }
}