# Reto de Automatización QA - FrontEnd

Proyecto de automatización de pruebas FrontEnd para la aplicación web Sauce Demo, desarrollado con Playwright, Cucumber y TypeScript.

## Tecnologías utilizadas

- Playwright
- Cucumber
- TypeScript
- Node.js
- Gherkin
- Page Object Model (POM)

## Aplicación bajo prueba

Sauce Demo

https://www.saucedemo.com/

## Objetivo

Automatizar los principales flujos funcionales de Sauce Demo:

- Inicio de sesión exitoso.
- Validación de credenciales inválidas.
- Validación de usuario bloqueado.
- Agregar un producto al carrito.
- Visualizar el producto en el carrito.
- Completar el proceso de compra hasta la confirmación.

## Estructura del proyecto

```text
reto-qa-automation/
├── features/
│   ├── login.feature
│   ├── cart.feature
│   └── checkout.feature
├── src/
│   ├── pages/
│   │   ├── LoginPage.ts
│   │   ├── ProductsPage.ts
│   │   ├── CartPage.ts
│   │   └── CheckoutPage.ts
│   ├── steps/
│   │   ├── login.steps.ts
│   │   ├── cart.steps.ts
│   │   └── checkout.steps.ts
│   ├── support/
│   │   ├── hooks.ts
│   │   └── world.ts
│   └── utils/
│       └── testData.ts
├── reports/
├── cucumber.js
├── tsconfig.json
├── package.json
└── README.md
```

## Patrón de diseño

Se utiliza Page Object Model (POM) para separar la lógica de interacción con las páginas de los escenarios y Step Definitions.

Los Page Objects implementados son:

- LoginPage
- ProductsPage
- CartPage
- CheckoutPage

## Escenarios automatizados

### Login

1. Inicio de sesión exitoso con usuario estándar.
2. Inicio de sesión con credenciales inválidas.
3. Inicio de sesión con usuario bloqueado.

### Carrito

4. Agregar Sauce Labs Backpack al carrito.
5. Visualizar Sauce Labs Backpack en el carrito.

### Checkout

6. Completar una compra exitosamente hasta visualizar la confirmación.

## Instalación

Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
```

Ingresar al proyecto:

```bash
cd reto-qa-automation
```

Instalar las dependencias:

```bash
npm install
```

Instalar los navegadores de Playwright:

```bash
npx playwright install
```

## Ejecución de pruebas

Ejecutar todos los escenarios:

```bash
npm test
```

## Reporte

Al finalizar la ejecución se genera un reporte HTML en:

```text
reports/cucumber-report.html
```

## Estrategia de automatización

La solución utiliza Cucumber y Gherkin para describir los escenarios funcionales de forma legible.

Playwright se utiliza para controlar el navegador e interactuar con Sauce Demo.

La arquitectura utiliza Page Object Model para centralizar los elementos y acciones de cada página, reduciendo duplicidad de código y facilitando el mantenimiento.

Los datos de prueba se encuentran separados de los Step Definitions en `testData.ts`.

También se implementan Hooks para administrar la apertura y cierre del navegador y capturar evidencia cuando un escenario falla.

## Autor

Sharon