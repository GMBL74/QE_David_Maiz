# language: es

Característica: Carrito de compras
  Como cliente de Sauce Demo
  Quiero agregar productos al carrito
  Para poder revisar los productos que deseo comprar

  Escenario: Agregar un producto al carrito
    Dado que el usuario estándar ha iniciado sesión
    Cuando agrega el producto Sauce Labs Backpack al carrito
    Entonces el carrito debe mostrar un producto agregado

  Escenario: Visualizar el producto agregado en el carrito
    Dado que el usuario estándar ha iniciado sesión
    Y ha agregado el producto Sauce Labs Backpack al carrito
    Cuando ingresa al carrito de compras
    Entonces debe visualizar el producto Sauce Labs Backpack en el carrito