import { Page } from "@playwright/test";

export class LoginAction {
  constructor(private page: Page) {}

//lista lokatorow
  private loginInput = "//input[@id='login_id']";
  private passwordInput = "//input[@id='login_password']";
  private loginBtn = "//button[@id='login_next']";
  private logoutBtn = "//a[@id='log_out']";

//akcje jakie mozna wykonac na okreslonej stronie
  async loginToBank(url: string, login: string, pass: string) {
    await this.page.goto(url);
    await this.page.locator(this.loginInput).fill(login);
    await this.page.locator(this.passwordInput).fill(pass);
    await this.page.locator(this.loginInput).click();
    await this.page.locator(this.loginBtn).click();
    await this.page.waitForSelector(this.logoutBtn);
  }
}
