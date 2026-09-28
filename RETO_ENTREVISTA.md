# Reto técnico en vivo – Mantenimiento de frameworks de automatización

**Duración sugerida:** 60 minutos (25 min Backend · 25 min Frontend · 10 min conversación)

## Contexto

Estos son **tus** frameworks (ServeRest API con Karate DSL y Sauce Demo con Playwright + Cucumber + TypeScript).
Mientras estabas de vacaciones, otro QA del equipo hizo un commit:

> `refactor: multi-entorno, demo y limpieza`

Desde entonces ninguna de las dos suites funciona. Tu tarea es devolverlas a **verde**.

## Reglas

1. **No se permite** borrar escenarios, marcarlos como `@ignore`, ni debilitar las validaciones
   (quitar `match`, `status` o `expect`). El objetivo es arreglar la causa raíz.
2. Puedes usar la documentación oficial (Karate, Playwright, Cucumber) y el navegador (DevTools).
3. **Piensa en voz alta**: explica qué ves, qué hipótesis tienes y cómo la confirmas.
4. Al terminar cada capa, muestra `git diff` y ejecuta la suite completa.

---

## Capa 1 – Backend (Karate DSL · ServeRest)

```bash
cd BackEnd/reto-qa-backend
mvn clean test
```

**Situación:** fallan todos los escenarios.

**Nota del QA que hizo el refactor:** *"Preparé la configuración para varios entornos, simplifiqué la
carga de datos de prueba en el registro y ordené el JSON de actualización."*

**Entregable:** `mvn clean test` con **7/7 escenarios en verde**.

---

## Capa 2 – Frontend (Playwright + Cucumber · TypeScript · Sauce Demo)

```bash
cd Frontend/reto-qa-automation
npm ci
npm test
```

**Situación:** la suite no llega a ejecutar ningún escenario.

**Nota del QA que hizo el refactor:** *"Limpié comentarios innecesarios de los features, agregué un
modo lento para las demos con negocio y ajusté la validación del login exitoso."*

**Entregable:** `npm test` con **6/6 escenarios en verde**, en un tiempo razonable.

---

## Conversación final (si queda tiempo)

- ¿Qué harías para que estos problemas **no vuelvan a llegar** al pipeline?
- ¿Qué cambiarías de tu propio diseño original después de ver estos fallos?
