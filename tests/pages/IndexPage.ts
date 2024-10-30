import {Page} from "@playwright/test";

export class IndexPage {
    page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    public async loginToAccount(username: string, password: string) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickOnLogin();

    }

    async enterUsername(username: string) {
        await this.page.locator("data-test=username").fill(username);
    }

    async enterPassword(password: string) {
        await this.page.locator("data-test=password").fill(password);
    }

    async clickOnLogin() {
        await this.page.locator('#login-button').click();
    }

}