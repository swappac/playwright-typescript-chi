import {expect} from '@playwright/test';
import test from './util/BaseTest';
import {testdata} from "../testdata";

test.describe("saucelabs", async () => {
    test.beforeEach(async ({page}) => {

        await page.goto("https://www.saucedemo.com/v1/index.html")
        console.log(testdata.standard.username);
        console.log(testdata.lockedOut.username);

    });

    test("Login as Standard user", async ({page, indexPage}) => {
        //When user is logged in as standard user
        await indexPage.loginToAccount(testdata.standard.username, testdata.standard.password)

        //Then user is navigated to inventory page
        await expect(page.getByText('Products')).toBeVisible();
    });

    test("Login as locked user", async ({page, indexPage}) => {
        //When user is logged in as standard user
        await indexPage.loginToAccount(testdata.lockedOut.username, testdata.lockedOut.password)

        //Then assert lockedOut text is displayed
        await expect(page.locator('[data-test="error"]')).toBeVisible();
    });

    test("user can click on product and go back to inventory page", async ({page, indexPage}) => {
        //Given Navigate to the application
        await page.goto("https://www.saucedemo.com/v1/index.html")

        //When user is logged in as standard user
        await indexPage.loginToAccount(testdata.standard.username, testdata.standard.password);

        //And user add an item to the cart
        await page.getByRole('link', {name: 'Sauce Labs Backpack'}).click();
        await page.getByRole('button', {name: '<- Back'}).click();
        expect(page.url()).toContain('/inventory');
    })


    test("Standard user can add products to cart", async ({page, inventoryPage, indexPage, cartPage}) => {
        //Given Navigate to the application
        await page.goto("https://www.saucedemo.com/v1/index.html")

        //When user is logged in as standard user
        await indexPage.loginToAccount(testdata.standard.username, testdata.standard.password);

        //And user add an item to the cart

        await inventoryPage.addItemsToCart();

        //And user clicks on cart
        await cartPage.clickOnCart();

        //And user can check out or Continue Shopping
        await expect(page.getByRole('link', {name: 'CHECKOUT'})).toBeVisible();
        await expect(page.getByRole('link', {name: 'Continue Shopping'})).toBeVisible();
    });

    test("Standard user can remove an item from cart", async (
        {page,
            inventoryPage,
            indexPage}) => {
        //Given Navigate to the application
        await page.goto("https://www.saucedemo.com/v1/index.html")

        //When user is logged in as standard user
        await indexPage.loginToAccount(testdata.standard.username, testdata.standard.password);

        //Then user can remove item from cart
        await inventoryPage.addItemsToCart();
        await inventoryPage.removeItemFromCart();
    });
});