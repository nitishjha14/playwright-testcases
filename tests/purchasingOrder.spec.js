const {test, expect} = require("@playwright/test");

test("@@ starting the test", async({page}) => {
  // Loading URL
  await page.goto("https://www.saucedemo.com/");
  await page.waitForLoadState("networkidle");

  // Locating website log - SwagLabs
  const mainLogo = await page.locator(".login_logo").textContent();
  expect(mainLogo).toContain("Swag Labs");
  console.log(`User is on the login page with title ${mainLogo}`);

  // Filling Credentials
  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");
  await page.locator("#login-button").click();
  await page.waitForLoadState("networkidle");

  // Reaching the Home page and locating the products to verify is logged in successfully
  const locateProduct = await page
    .locator(".header_secondary_container > span")
    .textContent();
  expect(locateProduct).toContain("Products");
  console.log(`User is logged inside the website and can see ${locateProduct}`);

  // Locate Sauce Labs Backpack & Click
  const targetProduct = await page
    .locator(".inventory_list > div:nth-child(1) .inventory_item_name ")
    .textContent();
  expect(targetProduct).toContain("Sauce Labs Backpack");
  console.log(`Found the target product "${targetProduct}"`);
  await page
    .locator(".inventory_list > div:nth-child(1) .inventory_item_name")
    .click();

  //   Find Add to Cart & Click
  const addToCart = await page.locator("#add-to-cart").textContent();
  expect(addToCart).toContain("Add to cart");
  console.log(`Found button: "${addToCart}"`);
  await page.locator("#add-to-cart").click();

  //   Confirmed that product added to cart by identifying the remove button
  const locateRemove = await page.locator("#remove").textContent();
  expect(locateRemove).toContain("Remove");
  console.log(`Added product to cart and located option to "${locateRemove}" `);

  //   Click the cart to open the cart and purchase
  await page.locator(".shopping_cart_link").click();
  const cartUrl = page.url();
  expect(cartUrl).toContain("cart.html");
  console.log(`Reached ${cartUrl} page`);

  //Click checkout
  await page.locator("#checkout").click();
  const checkoutUrl = page.url();
  expect(checkoutUrl).toContain("checkout-step-one.html");
  console.log(`Reached ${checkoutUrl} page`);

  //Checkout: Your Information
  await page.locator("#first-name").fill("John");
  await page.locator("#last-name").fill("Doe");
  await page.locator("#postal-code").fill("123456");
  await page.locator("#continue").click();

  //Checkout: Overview
  const checkoutUrlTwo = page.url();
  expect(checkoutUrlTwo).toContain("checkout-step-two.html");
  console.log(`Reached the second checkout ${checkoutUrlTwo}`);

  //Checkout Completed
  await page.locator("#finish").click();

  const completeCheckout = page.url();
  expect(completeCheckout).toContain("checkout-complete.html");
  console.log(`Reached the final ${completeCheckout} page`)

});