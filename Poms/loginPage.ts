import { Page, Locator } from "playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly usernameTextbox: Locator;
    readonly passTextbox: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameTextbox = page.getByRole("textbox", { name: "Username" });
        this.passTextbox = page.getByRole("textbox", { name: "Password" });
        this.loginButton = page.getByRole("button", { name: "Login" });
    }
    async fillUsername() {
        await this.usernameTextbox.fill("standard_user");
    }

    async fillPass() {
        await this.passTextbox.fill("secret_sauce");
    }

    async clickLoginButton() {
        await this.loginButton.click();
    }
}


