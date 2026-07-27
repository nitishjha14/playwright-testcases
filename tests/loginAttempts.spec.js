const { test, expect } = require("@playwright/test");


test.describe("Login faliures", () => {
    test("@@ Login with Locked out user", async ({ page }) => {
      await page.goto("https://www.saucedemo.com/");
      const findTitle = await page.locator(".login_logo").textContent();
      expect(findTitle).toContain("Swag Labs");
      console.log(`On the login page and located the title: "${findTitle}"`);

      await page.locator("#user-name").fill("locked_out_user");
      await page.locator("#password").fill("secret_sauce");
      await page.locator("#login-button").click();

      const errMsg = await page
        .locator(".error-message-container > h3")
        .textContent();
      expect(errMsg).toContain(
        "Epic sadface: Sorry, this user has been locked out.",
      );
      console.log(
        `Error message appeared when user is locked out: "${errMsg}"`,
      );
    });

    test("@@ Login attenmpt with wrong username", async({page}) => {
      await page.goto("https://www.saucedemo.com/");
      const findTitle = await page.locator(".login_logo").textContent();
      expect(findTitle).toContain("Swag Labs");
      console.log(
        `On the login page and located the title: "${findTitle}"`,
      )
      await page.locator("#user-name").fill("standard_use");
      await page.locator("#password").fill("secret_sauce");
      await page.locator("#login-button").click()
      const errMsg = await page
        .locator(".error-message-container > h3")
        .textContent();
      expect(errMsg).toContain(
        "Epic sadface: Username and password do not match any user in this service",
      );
      console.log(
        `Error message appeared when credentials are wrong: "${errMsg}"`,
      );
    
    });
    
});



