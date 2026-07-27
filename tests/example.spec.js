// tests/example.spec.js
const { test, expect } = require("@playwright/test");

test("gets started link works", async ({ page }) => {
  // `page` is handed to you automatically — a fresh context per test, no manual setup

  await page.goto("https://www.saucedemo.com");
  await page.waitForLoadState("networkidle");
  const loginLogoText = await page.locator(".login_logo").textContent();
  expect(loginLogoText).toContain("Swag Labs");
   console.log(`USER IS ON LOGIN PAGE with title: ${loginLogoText}`);
  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");
  await page.locator("#login-button").click();
  await page.waitForLoadState("networkidle");
    const afterLoginText = await page.locator(".header_secondary_container>span").textContent();
    expect(afterLoginText).toContain("Products");
    console.log("USER IS LOGGED IN and have title: " + afterLoginText);
 

});
