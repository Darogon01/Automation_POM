import { test, expect } from "@playwright/test";
import { LoginPage } from "../Poms/loginPage";

test("Evaluate login fields", async ({ page }) => {
	await page.goto("https://www.saucedemo.com/");
	await page.waitForTimeout(5000);
	await page.pause();
});

test("Login in to page", async ({ page }) => {
	const loginPage = new LoginPage(page);

	await page.goto("https://www.saucedemo.com/");
	await expect(loginPage.usernameTextbox).toBeVisible();
	await loginPage.fillUsername();
});
