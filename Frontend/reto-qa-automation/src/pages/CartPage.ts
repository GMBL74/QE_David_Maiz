import { Page, Locator, expect } from 'playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItem: Locator;
  readonly productName: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartItem = page.locator('[data-test="inventory-item"]');
    this.productName = page.locator('[data-test="inventory-item-name"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async verifyProductInCart(): Promise<void> {
    await expect(this.cartItem).toHaveCount(1);
    await expect(this.productName).toHaveText('Sauce Labs Backpack');
  }

  async proceedToCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }
}