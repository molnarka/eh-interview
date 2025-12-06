import { test, expect } from "@playwright/test";
import { SignalPage } from '../pages/SignalPage'

test.describe("Test Signal Page functionalities", () => {
    let signalPage: SignalPage;

    test.beforeEach("Open Signal Page", async ({ page }) => {
        signalPage = new SignalPage(page);

        signalPage.navigateToPage();
        await checkCountersAndResults('0','0');
    });

    test("Increment counter then reset", async ({ page }) => {
        await signalPage.incrementCounter();
        await checkCountersAndResults('1','2');
        await signalPage.resetCounter();
        await checkCountersAndResults('0','0');
    });

    test("Decrement counter then reset", async ({ page }) => {
        await signalPage.decrementCounter();
        await checkCountersAndResults('-1','-2');
        await signalPage.resetCounter();
        await checkCountersAndResults('0','0');
    });

    async function checkCountersAndResults(singleCounterExpected: string, doubleCounterExpected: string) {
        let singleCounter = await signalPage.getSingleCounter();
        expect(singleCounter).toBe(singleCounterExpected);
        let doubleCounter = await signalPage.getDoubleCounter();
        expect(doubleCounter).toBe(doubleCounterExpected);
        let resultText = await signalPage.getResultText();
        expect(resultText).toBe(`Computed from signals --> Original: ${singleCounterExpected}, Double: ${doubleCounterExpected}`)
    }
});
