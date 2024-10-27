import{Page}from"@playwright/test";

export class InventoryPage {

page: Page;

constructor(page: Page){
    this.page = page;
}

async addItemsToCart(){
        await this.page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
      //  await this.page.locator('div').filter({ hasText: /^\$49\.99ADD TO CART$/ }).getByRole('button').click();
}


async removeItemFromCart() {
    await this.page.getByRole('button', { name: 'REMOVE' }).click();
   // await this.page.locator('div').filter({ hasText: /^29\.99REMOVE$/ }).getByRole('button').click();
} 

async clickOnCart() {
   // await expect(page.locator('#shopping_cart_container').getByRole('link')).toBeVisible();
    await this.page.getByRole('link', { name: '1' }).click();
}
}

