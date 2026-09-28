import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { users } from '../utils/testData';

Given(
  'que el usuario se encuentra en la página de inicio de sesión',
  async function (this: CustomWorld) {
    const loginPage = new LoginPage(this.page);
    await loginPage.navigate();
  }
);

When(
  'ingresa las credenciales del usuario estándar',
  async function (this: CustomWorld) {
    const loginPage = new LoginPage(this.page);
    await loginPage.login(
      users.standard.username,
      users.standard.password
    );
  }
);

Then(
  'debe visualizar la página de productos',
  async function (this: CustomWorld) {
    const loginPage = new LoginPage(this.page);
    const productsPage = new ProductsPage(this.page);

    await loginPage.verifySuccessfulLogin();
    await productsPage.verifyProductsPage();
  }
);

When(
  'ingresa credenciales inválidas',
  async function (this: CustomWorld) {
    const loginPage = new LoginPage(this.page);
    await loginPage.login(
      users.invalid.username,
      users.invalid.password
    );
  }
);

Then(
  'debe visualizar un mensaje de error',
  async function (this: CustomWorld) {
    const loginPage = new LoginPage(this.page);
    await loginPage.verifyErrorMessage();
  }
);

When(
  'ingresa las credenciales del usuario bloqueado',
  async function (this: CustomWorld) {
    const loginPage = new LoginPage(this.page);
    await loginPage.login(
      users.locked.username,
      users.locked.password
    );
  }
);

Then(
  'debe visualizar el mensaje de usuario bloqueado',
  async function (this: CustomWorld) {
    const loginPage = new LoginPage(this.page);
    await loginPage.verifyLockedUserError();
  }
);