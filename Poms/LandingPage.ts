import { Page, Locator } from "playwright/test";

export default class LoginPage {
	private readonly usernameTextbox: Locator;
	private readonly passTextbox: Locator;
	private readonly loginButton: Locator;

	constructor(page: Page) {
		this.usernameTextbox = page.getByRole("textbox", { name: "Username" });
		this.passTextbox = page.getByRole("textbox", { name: "Password" });
		this.loginButton = page.getByRole("button", { name: "Login" });
	}
}
