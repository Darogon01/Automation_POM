import { test, expect } from "@playwright/test";
import LoginPage from "../Poms/LandingPage";

test("Evaluate login fields", async ({ page }) => {
	await page.goto("https://www.saucedemo.com/");
	await page.waitForTimeout(5000);
	await page.pause();
});

test("Login in to page", async ({ page }) => {
	const loginPage = new LoginPage(page);

	await page.goto("https://www.saucedemo.com/");
	await page.waitForTimeout(5000);
	await page.pause();
});
