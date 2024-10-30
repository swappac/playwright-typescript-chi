import { test, expect } from "@playwright/test";
import { injectAxe, checkA11y, getViolations, reportViolations } from 'axe-playwright'

test(`Verify Page Accessibility`, async ({ page }) => {
    await page.goto('https://google.com/');
    await injectAxe(page)
    // Automatically uses the shared AxeBuilder configuration,
    await checkA11y(page, null, {
        detailedReport: true,
    })
});