import { Page, Locator } from "playwright/test";

export class LoginPage {
	readonly page: Page;
	 readonly usernameTextbox: Locator;
	 readonly passTextbox: Locator;
	private readonly loginButton: Locator;

	constructor(page: Page) {
		this.page = page;
		this.usernameTextbox = page.getByRole("textbox", { name: "Username" });
		this.passTextbox = page.getByRole("textbox", { name: "Password" });
		this.loginButton = page.getByRole("button", { name: "Login" });
	}
	async fillUsername() {
		this.usernameTextbox.fill("Standard_user");
	}
}
