# GuessTheNumber-JS

**Pequeño juego de adivinar el número (1–100) desarrollado como práctica inicial de JavaScript.**  
Primera versión de un proyecto que irá evolucionando a medida que aprenda nuevas funcionalidades y conceptos.

---

## Descripción

GuessTheNumber-JS es un juego sencillo donde el jugador debe adivinar un número aleatorio entre 1 y 100.  
El juego da pistas indicando si el número ingresado es mayor o menor que el número secreto.  
Esta es una práctica de JavaScript, usando:

- Generación de números aleatorios (`Math.random()`)
- Manipulación del DOM (`document.querySelector`)
- Eventos (`addEventListener`)
- Condicionales (`if`, `else if`, `else`)

---

## Estructura del proyecto

```
Numberdle/
│
├─ index.html       # Archivo principal HTML
├─ mystyle.css      # Estilos del juego
├─ scripts.js       # Lógica del juego en JavaScript
└─ imagenes/
```

---

## Cómo usar

1. Clona el repositorio o descarga los archivos:

```bash
git clone https://github.com/tu-usuario/Numberdle.git
```

2. Abre `index.html` en tu navegador (doble clic o “Abrir con…”).

3. Ingresa un número del 1 al 100 y presiona **Enviar📤**.  
   - Si aciertas, recibirás un mensaje de victoria.  
   - Si el número es mayor o menor, recibirás una pista.

4. Para reiniciar el número secreto, haz clic en **Reinciar ↺**.

---

## Requisitos

- Navegador moderno (Chrome, Firefox, Edge…)  
- No requiere instalación de servidores ni Node.js para esta versión básica.

---

## Changelog

### [1.1] - 2026-03-17
Añadido
- Pistas mostradas en pantalla.
- Imágenes para indicar si el número es mayor o menor.

Cambiado
- Eliminados los `alert()` del sistema de pistas.

### [1.0] - 2026-03-04
Añadido
- Primera versión del juego.

