import {IndexPage} from "../pages/IndexPage";
import {CartPage} from "../pages/cartPage";
import {InventoryPage} from "../pages/InventoryPage";
import {test as baseTest} from "@playwright/test";


const test = baseTest.extend<{
    indexPage: IndexPage,
    cartPage: CartPage,
    inventoryPage: InventoryPage}> ({

    indexPage: async ({page}, use) => {
        await use(new IndexPage(page))
    },

    cartPage: async ({page}, use) => {
        await use(new CartPage(page))
    },
    inventoryPage: async ({page}, use) => {
        await use(new InventoryPage(page))
    },

});
export default test;