import { test, expect } from "@playwright/test";

test.describe("Test User action functionalities", () => {
    test.beforeEach("Open home page", async ({ page }) => {
        await page.goto("localhost:4200/");
        await expect(page).toHaveTitle("angular-advanced-sample");
        await expect(page).toHaveURL("http://localhost:4200/facade");
    });

    test.afterEach("Wait some time for the proper recording", async ({video}) => {
        if (video === "on") {
            await delay(2000);
        }
    });

    test("Click on first user's details", async ({ page }) => {
        await page.locator("lib-button", {hasText: "Details"}).first().click();
    });
});

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}