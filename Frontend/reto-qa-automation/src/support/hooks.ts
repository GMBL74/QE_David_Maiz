import { Before, After, Status } from '@cucumber/cucumber';
import { chromium } from 'playwright';
import { CustomWorld } from './world';

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({
    headless: false,
    // ejecución más lenta para que el negocio pueda seguir la demo
    slowMo: 2000
  });

  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (this: CustomWorld, scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const screenshot = await this.page.screenshot({
      fullPage: true
    });

    await this.attach(screenshot, 'image/png');
  }

  await this.context?.close();
  await this.browser?.close();
});