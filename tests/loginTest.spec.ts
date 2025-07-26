import { test, expect } from "@playwright/test";
import { LoginPage } from "../Poms/loginPage";
import { envData } from "../utils/envglobal";

test("Acce page to testing", async ({ page }) => {
    await page.goto(envData.BASE_URL);
    
});

test("Login in to page", async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto("https://www.saucedemo.com/");
    await loginPage.fillUsername();
    await loginPage.fillPass();
    await loginPage.clickLoginButton();
    await expect(page).toHaveURL(/inventory/);
});
