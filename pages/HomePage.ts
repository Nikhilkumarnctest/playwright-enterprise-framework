import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
  private readonly page: Page;
  private readonly homeHeading: Locator;

  constructor(page: Page) {
    this.page = page;

    this.homeHeading = page.getByRole('heading', {
      name: 'Home',
      exact: true,
    }).first();
  }

  async navigateToHomePage(): Promise<void> {
    await this.page.goto('/lightning/page/home').catch((err) => {
        console.error(`Error while navigating home page ${err}`);
    });
  }

  async isHomeHeadingVisible(): Promise<void> {
    await expect(this.homeHeading).toBeVisible({
      timeout: 10_000,
    });
  }
}