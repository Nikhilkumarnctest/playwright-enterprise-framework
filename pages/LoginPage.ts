import { Locator, Page, expect } from '@playwright/test';

export class LoginPage {
  private readonly page: Page;
  private readonly loginEntryPoint: Locator;
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginEntryPoint = page
      .getByRole('link', { name: /log in|login|sign in/i })
      .or(page.getByRole('button', { name: /log in|login|sign in/i }))
      .first();
    this.usernameInput = page.getByLabel(/username|email/i);
    this.passwordInput = page.getByLabel(/password/i);
    this.loginButton = page.getByRole('button', { name: /log in|login|sign in/i });
  }

  async navigateToLoginPage(): Promise<void> {
    await this.page.goto('/');    // await this.loginEntryPoint.click();
  }

  async enterUsername(username: string): Promise<void> {
    await this.usernameInput.fill(username);
  }

  async continueToPasswordPage(): Promise<void> {
    await this.loginButton.click();
    await this.passwordInput.waitFor({ state: 'visible' });
  }

  async enterPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async clickOnLogin(): Promise<void> {
    await this.loginButton.click();
  }

  async navigateToHomePage(): Promise<void>{
  await this.page.goto('/lightning/page/home')
  }

  async isHomeHeadingVisible(): Promise<void>{
  }
}