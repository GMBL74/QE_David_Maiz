import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { users, checkoutData } from '../utils/testData';

Given(
  'que el usuario estándar tiene un producto agregado al carrito',
  async function (this: CustomWorld) {
    const loginPage = new LoginPage(this.page);
    const productsPage = new ProductsPage(this.page);

    await loginPage.navigate();

    await loginPage.login(
      users.standard.username,
      users.standard.password
    );

    await productsPage.verifyProductsPage();
    await productsPage.addBackpackToCart();
    await productsPage.verifyProductAdded();
  }
);

Given(
  'se encuentra en el carrito de compras',
  async function (this: CustomWorld) {
    const productsPage = new ProductsPage(this.page);
    const cartPage = new CartPage(this.page);

    await productsPage.goToCart();
    await cartPage.verifyProductInCart();
  }
);

When(
  'inicia el proceso de checkout',
  async function (this: CustomWorld) {
    const cartPage = new CartPage(this.page);

    await cartPage.proceedToCheckout();
  }
);

When(
  'completa la información requerida',
  async function (this: CustomWorld) {
    const checkoutPage = new CheckoutPage(this.page);

    await checkoutPage.fillCheckoutInformation(
      checkoutData.firstName,
      checkoutData.lastName,
      checkoutData.postalCode
    );
  }
);

When(
  'finaliza la compra',
  async function (this: CustomWorld) {
    const checkoutPage = new CheckoutPage(this.page);

    await checkoutPage.finishPurchase();
  }
);

Then(
  'debe visualizar la confirmación de compra exitosa',
  async function (this: CustomWorld) {
    const checkoutPage = new CheckoutPage(this.page);

    await checkoutPage.verifyPurchaseCompleted();
  }
);