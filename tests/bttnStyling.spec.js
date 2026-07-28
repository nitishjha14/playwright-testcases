const {test, expect} = require("@playwright/test");
const {LoginPage} = require("../pages/LoginPage");

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

    test("Verifying cart button color after clicking with remove", async({page}) => {
        await page.goto("https://www.saucedemo.com/");
        await page.waitForLoadState("networkidle");

        const loginPage = new LoginPage(page);
        await loginPage.login("standard_user", "secret_sauce");

        // await page.locator("#user-name").fill("standard_user");
        // await page.locator("#password").fill("secret_sauce");
        // await page.locator("#login-button").click();

        const cartBttn = await page.locator("#add-to-cart-sauce-labs-backpack").evaluate((element) => {
            return window.getComputedStyle(element).color;
        }); 

        expect(cartBttn).toBe("rgb(19, 35, 34)");
        console.log(`The expected color of cart button is ${cartBttn}`);


        await page.locator("#add-to-cart-sauce-labs-backpack").click();
        
        const removeBttn = await page.locator("#remove-sauce-labs-backpack").evaluate((element) => {
            return window.getComputedStyle(element).color;
        });
        expect(removeBttn).toBe("rgb(226, 35, 26)");
        console.log(`The expected color of remove button is ${removeBttn}`);



    });



});