import { Page, Locator, expect } from 'playwright/test';

export class ProductsPage {
  readonly page: Page;
  readonly title: Locator;
  readonly addBackpackButton: Locator;
  readonly cartLink: Locator;
  readonly cartBadge: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.locator('[data-test="title"]');
    this.addBackpackButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  async verifyProductsPage(): Promise<void> {
    await expect(this.title).toHaveText('Products');
  }

  async addBackpackToCart(): Promise<void> {
    await this.addBackpackButton.click();
  }

  async verifyProductAdded(): Promise<void> {
    await expect(this.cartBadge).toHaveText('1');
  }

  async goToCart(): Promise<void> {
    await this.cartLink.click();
  }
}