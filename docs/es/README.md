<p align="center">
    <a href="#">
        <img alt="js-packtools" src="https://repository-images.githubusercontent.com/185065568/99338980-6f4c-11e9-95ca-045dfeca2f45" width="546">
    </a>
</p>
<p align="center">
    :pineapple: Una pequeña coleción de herramientas para proyectos Javascript y NodeJs.
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/js-packtools">
        <img alt="npm" src="https://img.shields.io/npm/v/js-packtools.svg">
    </a>
    <a href="https://travis-ci.org/jasp402/js-packtools">
        <img alt="Build Status" src="https://travis-ci.org/jasp402/js-packtools.svg?branch=master">
    </a>
    <a href="https://david-dm.org/jasp402/js-packtools">
        <img alt="Dependencies" src="https://david-dm.org/jasp402/js-packtools/status.svg">
    </a>
    <a href="https://trello.com/b/FMUpri2i/js-packtools">
            <img alt="Trello" src="https://img.shields.io/badge/project-on%20Trello-blue.svg">
    </a>
    <a href="https://gitter.im/js-packtools/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge">
        <img alt="Gitter" src="https://badges.gitter.im/js-packtools/community.svg">
    </a>
</p>

***

<p align="center">
    <a href="https://jasp402.github.io/js-packtools/#/es/">Guía de inicio</a> |
    <a href="https://jasp402.github.io/js-packtools/#/es/api">API Documentación</a> |
    <a href="https://jasp402.github.io/js-packtools/#/es/help">Ayuda & Soporte</a> |
    <a href="https://jasp402.github.io/js-packtools/#/es/donate">Contribuir</a>
</p>

***

## Que es JS PackTools?
Este es un repositorio de utilidades. Lo que comenzó como un par de ideas, rápidamente se convirtió en una clase que agrupaba varios tipos de funcionalidades. La intención de este paquete es agrupar un conjunto de ayudantes y/o utilidades, para facilitar los trabajos de rutina, especialmente relacionados con webScraping.

---

Bienvenido a la documentación **JS PackTools**. Te ayudará a empezar rápido. Si tiene problemas, puede encontrar ayuda y respuestas en nuestro canal de Gitter.

## Instalación
Download **JS PackTools** Usage **NPM** <br/>

```npm
npm i js-packtools --save-dev
```

En su archivo index.js:
```javascript
let jsPacktools = require("js-packtools");
let utils = new jsPacktools();
```

Como se puede usar?

```javascript
utils.customDate("05/01/2019", "yyyy-mm-dd")
//2019-05-01

utils.createFolders("backups")
// /backups/2019_05_01/
```

## Lista de contenido
Las funciones de este paquete se dividen en categorías. para que sea más fácil encontrar una función que esté fuera de línea con sus necesidades.

|   Funciones       |     Categoria       |   Desde |     Descripcion                                     |
|-------------------|---------------------|-------|-------------------------------------------------------|
| :seedling:  [**writeLogError**](https://jasp402.github.io/js-packtools/#/es/api/v1/writeLogError)           | Global              | 0.1 | Create a document with log error.                     |
| :seedling: [**writeLog**](https://jasp402.github.io/js-packtools/#/es/api/v1/writeLog)      | Global              | 0.1 | Used for tracking, create a document                  |
| :seedling: [**customDate**](https://jasp402.github.io/js-packtools/#/es/api/v1/customDate)        | Time                | 0.1 | Customize the date                                    |
| :seedling: [**objectToDate**](https://jasp402.github.io/js-packtools/#/es/api/v1/objectToDate)      | Time                | 0.1 | turn an assigned date into an object                  |
| :seedling: [**validateYear**](https://jasp402.github.io/js-packtools/#/es/api/v1/validateYear)      | Time                | 0.1 | Valid the year in a date                              |
| :fire: increaseDays      | Time                | 0.1 | Increase the count days in a date                     |
| :seedling: [**differenceDay**](https://jasp402.github.io/js-packtools/#/es/api/v1/differenceDay)     | Time                | 0.1 | Count the difference of day between two date          |
| :fire: generateRageDate  | Time                | 0.1 | Split a date based in the count of day assign         |
| :seedling: [**createFolders**](https://jasp402.github.io/js-packtools/#/es/api/v1/createFolders)     | Path and Files      | 0.1 | Create folder in mode manual or automatic             |
| :fire: validateDir       | Path and Files      | 0.1 | Validate a path if exist and create in modo recursive |
| :seedling: [**clearFolder**](https://jasp402.github.io/js-packtools/#/es/api/v1/clearFolder)       | Path and Files      | 0.1 | Delete all content                                    |
| :fire: deleteFile | Path and Files      | -.-.- | Confirm if file exists and delete                                           |
| :fire: csvToJson         | Path and Files      | 0.1 | Convert a CSV to JSON                                 |
| :fire: saveProgressData  | Path and Files      | -.-      | <<PENDING>>                                           |
| :fire: groupBy           | Arrays and Object   | -.-      | <<PENDING>>                                           |


:seedling: **Completado** <br>
:fire: **En desarrollo** <br>
:speech_balloon: **Bajo discución** <br>

Por favor revise la [Documentación API](https://jasp402.github.io/js-packtools/#/es/api) Sección para ver todas las opciones disponibles.

## Contribuyentes
Echa un vistazo a nuestro documento de  [CONTRIBUTING.md](https://jasp402.github.io/js-packtools/#/es/contribute) para empezar a configurar el repositorio.

Si buscas algo para aportar. Puede revisar nuestro proyecto en [Trello](https://trello.com/b/FMUpri2i/js-packtools) en el tablero "* Features *".  También puede comunicarse con nuestro canal de [Gitter](https://gitter.im/js-packtools/community) si tiene alguna pregunta sobre dónde comenzar a contribuir.

> *Gracias a estas maravillosas personas (por su contribución)*

|      |       |
|------------|-------------|
|  <center><img src="https://avatars2.githubusercontent.com/u/22778784?s=460&v=4" width="100"></center><br><center>[Gustavo Cacharuco](https://github.com/Gztabo21)</center> |  <center><img src="https://avatars1.githubusercontent.com/u/8978470?s=460&v=4" width="100"></center><br><center>[Jesús Pérez](https://github.com/jasp402)</center> |


## License
Este repositorio está bajo una License [MIT](https://raw.githubusercontent.com/jasp402/js-packtools/master/LICENSE)  <br>
**Copyright 2019** | All rights reserved to [**Jasp402**](http://jasp402.com/)

