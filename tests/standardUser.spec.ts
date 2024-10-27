import { test, expect } from '@playwright/test';

import { InventoryPage } from './pages/InventoryPage';
import { IndexPage } from './pages/IndexPage';


test.describe("saucelabs", async()=> {
  let indexPage: IndexPage;
  let inventoryPage: InventoryPage;

  test.beforeEach(async ({ page }) => {
    indexPage = new IndexPage(page);
    inventoryPage = new InventoryPage(page);
  })

  test("Login as Standard user", async({page}) =>{
    //Given Navigate to the application
    await page.goto("https://www.saucedemo.com/v1/index.html")

    //When user is logged in as standard user
    await indexPage.loginToAccount('standard_user', 'secret_sauce')
 

    //Then user is navigated to inventory page
    await expect(page.getByText('Products')).toBeVisible();
})

test("user can click on product and go back to inventory page", async({page}) =>{
  //Given Navigate to the application
  await page.goto("https://www.saucedemo.com/v1/index.html")
  
  //When user is logged in as standard user
   await indexPage.loginToAccount('standard_user', 'secret_sauce');
  
   //And user add an item to the cart
   await page.getByRole('link', { name: 'Sauce Labs Backpack' }).click();
   await page.getByRole('button', { name: '<- Back' }).click();
   expect(page.url()).toContain('/inventory');
})


test("Standard user can add products to cart", async({page}) =>{
//Given Navigate to the application
await page.goto("https://www.saucedemo.com/v1/index.html")

//When user is logged in as standard user
 await indexPage.loginToAccount('standard_user', 'secret_sauce');

 //And user add an item to the cart

 await inventoryPage.addItemsToCart();

 //And user clicks on cart
 await inventoryPage.clickOnCart();
 
// And user can checkout or Continue Shopping
await expect(page.getByRole('link', { name: 'CHECKOUT' })).toBeVisible();
await expect(page.getByRole('link', { name: 'Continue Shopping' })).toBeVisible();


 });

test("Standard user can remove an item from cart", async({page})=>{

//Given Navigate to the application
await page.goto("https://www.saucedemo.com/v1/index.html")

//When user is logged in as standard user
 await indexPage.loginToAccount('standard_user', 'secret_sauce');

//Then user can remove na item from cart
 await inventoryPage.addItemsToCart();
 await inventoryPage.removeItemFromCart();

});

});