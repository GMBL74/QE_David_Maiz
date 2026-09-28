# language: es

Característica: Inicio de sesión en Sauce Demo
  Como cliente de Sauce Demo
  Quiero iniciar sesión en la aplicación
  Para poder acceder a los productos disponibles

  Escenario: Inicio de sesión exitoso con usuario estándar
    Dado que el usuario se encuentra en la página de inicio de sesión
    Cuando ingresa las credenciales del usuario estándar
    Entonces debe visualizar la página de productos

  Escenario: Inicio de sesión con credenciales inválidas
    Dado que el usuario se encuentra en la página de inicio de sesión
    Cuando ingresa credenciales inválidas
    Entonces debe visualizar un mensaje de error

  Escenario: Inicio de sesión con usuario bloqueado
    Dado que el usuario se encuentra en la página de inicio de sesión
    Cuando ingresa las credenciales del usuario bloqueado
    Entonces debe visualizar el mensaje de usuario bloqueado