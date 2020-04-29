# Awesome profile cards - Refactorización de código heredado
Este es el proyecto del módulo 3 de [Adalab](https://adalab.es), y nosotras somos **ReactivePalettes** 🎉 (grupo 4 tarde): [Elvira Alonso](https://github.com/elviac94), [María Garvía](https://github.com/mgarvia), [Romi Paz](https://github.com/rpaz-code) y [Soraya Valle](https://github.com/sorayav).

El proyecto consiste en refactorizar con React el código JavaScript vanilla del proyecto anterior de otro equipo. En nuestro caso, hemos tenido que adaptar [el proyecto del equipo 3](https://github.com/Adalab/project-promo-i-module-2-team-3-afternoon).

## Suena bien, pero ¿qué es esto y cómo lo uso?

***Awesome profile cards* es una aplicación interactiva de creación de tarjetas de visita**. En ella puedes rellenar tu información personal y tus perfiles profesionales y ver cómo quedará tu tarjeta según la vas creando. Posteriormente obtendrás un enlace único que puedes compartir donde quieras, y directamente en tu Twitter sin salir de la aplicación.  

Para usar la aplicación: 
- Pruébala en nuestro enlace de [Github Pages]( http://beta.adalab.es/project-promo-i-module-3-team-4-afternoon).
- Descarga o clona el repositorio:  `git clone https://github.com/Adalab/project-promo-i-module-3-team-4-afternoon.git`, instala el sistema de gestión de paquetes para Node.js con `npm install` y arranca la aplicación con `npm start` para usarla de forma local.

## ¿Cómo está desarrollada?

La SPA está creada con ReactJS y preprocesador SASS (SCSS). Para especificar distintas rutas en la aplicación (*landing* y *card maker*) hemos utilizado la librería `React Router`.
Además, hemos hecho uso del paquete `prop-types` para tipar las `props` de nuestros componentes y mejorar la claridad y robustez del código.

## ¿Cómo funciona?
El editor de la tarjeta, una vez accedes desde la home, está dividido en dos partes:

- Un formulario que consta de 3 secciones:
- [x] **Diseña**: donde podrás escoger entre tres paletas de colores para personalizar el estilo de tu tarjeta.
- [X] **Rellena**: donde indicar tu información personal (nombre, profesión, email, teléfono y foto) y tus perfiles profesionales (LinkedIn y Github).
- [X] **Comparte**: una vez hecho lo anterior, haciendo clic sobre 'Crear tarjeta' se generará un código en el que verás tu tarjeta completada y dispondrás de un botón para compartirla en tu cuenta de Twitter.

- Una vista previa de la tarjeta:
- [x] **Imagen de la tarjeta**: esta se actualiza automáticamente según vas completando campos.
- [x] **Botón reset**: con el que eliminar toda la información agregada, tanto del formulario como de la preview. Este botón también reseteará la información del localStorage, ya que la aplicación guarda los datos para que, al refrescar la página, estos no se pierdan.

¡Gracias por visitar nuestro repositorio!