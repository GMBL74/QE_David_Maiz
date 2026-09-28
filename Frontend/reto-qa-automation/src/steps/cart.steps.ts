import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { users } from '../utils/testData';

Given(
  'que el usuario estándar ha iniciado sesión',
  async function (this: CustomWorld) {
    const loginPage = new LoginPage(this.page);
    const productsPage = new ProductsPage(this.page);

    await loginPage.navigate();
    await loginPage.login(
      users.standard.username,
      users.standard.password
    );

    await productsPage.verifyProductsPage();
  }
);

When(
  'agrega el producto Sauce Labs Backpack al carrito',
  async function (this: CustomWorld) {
    const productsPage = new ProductsPage(this.page);

    await productsPage.addBackpackToCart();
  }
);

Then(
  'el carrito debe mostrar un producto agregado',
  async function (this: CustomWorld) {
    const productsPage = new ProductsPage(this.page);

    await productsPage.verifyProductAdded();
  }
);

Given(
  'ha agregado el producto Sauce Labs Backpack al carrito',
  async function (this: CustomWorld) {
    const productsPage = new ProductsPage(this.page);

    await productsPage.addBackpackToCart();
  }
);

When(
  'ingresa al carrito de compras',
  async function (this: CustomWorld) {
    const productsPage = new ProductsPage(this.page);

    await productsPage.goToCart();
  }
);

Then(
  'debe visualizar el producto Sauce Labs Backpack en el carrito',
  async function (this: CustomWorld) {
    const cartPage = new CartPage(this.page);

    await cartPage.verifyProductInCart();
  }
);