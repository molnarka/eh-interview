import { test, expect } from "@playwright/test";
import { FacadePage } from '../pages/FacadePage'

test.describe("Test Facade Page functionalities", () => {
    let facadePage: FacadePage;

    test.beforeEach("Open Signal Page", async ({ page }) => {
        facadePage = new FacadePage(page);

        facadePage.navigateToPage();
        await expect(page).toHaveTitle("angular-advanced-sample");
        await expect(page).toHaveURL('/facade');
    });

    test.afterEach("Wait some time for the proper recording", async ({video}) => {
        if (video === "on") {
            await delay(2000);
        }
    });

    test("Check name of the first user on details card", async ({ page }) => {
        let firstUserNameInList = await facadePage.getXUserName(0);
        await facadePage.openXUserDetails(0);
        let firstUserNameOnDetails = await facadePage.getFullNameFromOpenedDetails();
        expect(firstUserNameOnDetails).toBe(firstUserNameInList);
    });
});

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}