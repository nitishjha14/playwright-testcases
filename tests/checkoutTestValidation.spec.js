const {test, expect} = require("@playwright/test");


test.describe("Checkout test validation", () => {

    test("@@ Filling all details correctly", async ({page}) => {
        await page.goto("https://www.saucedemo.com/");
        await page.locator("#user-name").fill("standard_user");
        await page.locator("#password").fill("secret_sauce");
        await page.locator("#login-button").click();
        const productPage = await page.url();
        console.log(`Reached product page ${productPage}`);

        await page.locator("#add-to-cart-sauce-labs-backpack").click();
        await page.locator(".shopping_cart_link").click();
        const cartUrl = await page.url();
        console.log(`We have reached the ${cartUrl} page`);
        
        // const actualColor = await page.locator("#checkout").evaluate((element) => {
        //   return window.getComputedStyle(element).backgroundColor;
        // });
        // expect(actualColor).toContain("rgb(61, 220, 145)");
        // console.log(`Expected color is ${actualColor}`);
        
        await page.locator("#checkout").click();
        const firCheckoutUrl = page.url();
        console.log(`We have reached the ${firCheckoutUrl} page`);

        await page.locator("#first-name").fill("David");
        await page.locator("#last-name").fill("Putra");
        await page.locator("#postal-code").fill("123123");
        await page.locator("#continue").click();
        const secCheckoutUrl = page.url();
        console.log(`We have reached ${secCheckoutUrl} page`);



    });
    
    test("Leaving last name empty", async ({page}) => {
        await page.goto("https://www.saucedemo.com/");
        await page.locator("#user-name").fill("standard_user");
        await page.locator("#password").fill("secret_sauce");
        await page.locator("#login-button").click();
        const productPage = await page.url();
        console.log(`Reached product page ${productPage}`);

        await page.locator("#add-to-cart-sauce-labs-backpack").click();
        await page.locator(".shopping_cart_link").click();
        const cartUrl = await page.url();
        console.log(`We have reached the ${cartUrl} page`);

        await page.locator("#checkout").click();
        const firCheckoutUrl = page.url();
        console.log(`We have reached the ${firCheckoutUrl} page`);

        await page.locator("#first-name").fill("David");
        await page.locator("#last-name").fill("");
        await page.locator("#postal-code").fill("123123");
        await page.locator("#continue").click();

        const errLastname = await page.locator(".error-message-container > h3").textContent();
        expect(errLastname).toContain("Error: Last Name is required");
        console.log(`Error which appear on absence of last name: ${errLastname}`);
        


    });
    test("Leaving zip empty", async ({page}) => {
        await page.goto("https://www.saucedemo.com/");
        await page.locator("#user-name").fill("standard_user");
        await page.locator("#password").fill("secret_sauce");
        await page.locator("#login-button").click();
        const productPage = await page.url();
        console.log(`Reached product page ${productPage}`);

        await page.locator("#add-to-cart-sauce-labs-backpack").click();
        await page.locator(".shopping_cart_link").click();
        const cartUrl = await page.url();
        console.log(`We have reached the ${cartUrl} page`);

        await page.locator("#checkout").click();
        const firCheckoutUrl = page.url();
        console.log(`We have reached the ${firCheckoutUrl} page`);

        await page.locator("#first-name").fill("David");
        await page.locator("#last-name").fill("Putra");
        await page.locator("#postal-code").fill("");
        await page.locator("#continue").click();

        const errLastname = await page.locator(".error-message-container > h3").textContent();
        expect(errLastname).toContain("Error: Postal Code is required");
        console.log(`Error which appear on absence of  postal code: ${errLastname}`,);
        

    });
});