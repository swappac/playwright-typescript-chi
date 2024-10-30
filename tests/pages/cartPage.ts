import {Page} from "@playwright/test";

export class CartPage {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickOnCart() {
        // await expect(page.locator('#shopping_cart_container').getByRole('link')).toBeVisible();
        await this.page.getByRole('link', {name: '1'}).click();
    }
}

