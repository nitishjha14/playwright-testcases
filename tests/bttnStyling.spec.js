const {test, expect} = require("@playwright/test");

test.describe("Testing the button stylling scenerios", () => {
    
    test("Verifying the login button color", async ({page}) => {
        await page.goto("https://www.saucedemo.com/");
        await page.waitForLoadState("networkidle");

        const loginButton = await page.locator("#login-button").evaluate((element) => {
            return window.getComputedStyle(element).backgroundColor;
        });

        expect(loginButton).toBe("rgb(61, 220, 145)");
        console.log(`The expected color of login button is ${loginButton}`);
    });

});