<p align="center">
    <a href="#">
        <img alt="js-packtools" src="https://repository-images.githubusercontent.com/185065568/99338980-6f4c-11e9-95ca-045dfeca2f45" width="546">
    </a>
</p>
<p align="center">
    :pineapple: A small collection of tools for the development of javascript & NodeJS.
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
    <a href="https://jasp402.github.io/js-packtools/#/">Getting Started</a> |
    <a href="https://jasp402.github.io/js-packtools/#/api">API Docs</a> |
    <a href="https://jasp402.github.io/js-packtools/#/help">help & Support</a> |
    <a href="https://jasp402.github.io/js-packtools/#/donate">Contribute</a>
</p>

***

## What is JS PackTools?
This is a repository of utilities. What started as a couple of ideas, quickly became a class that grouped several types of functionalities. The intention of this package is to group a set of helpers and/or utilities, to ease routine jobs, especially related to webScraping or the data format.

---

Welcome to the **JS PackTools** documentation. It will help you to get started fast. If you run into problems you can find help and answers on our Gitter Channel or you can hit me on Twitter.


## Installation
Download **JS PackTools** Usage **NPM** <br/>

```npm
npm i js-packtools --save-dev
```

In your file index.js:
```javascript
let jsPacktools = require("js-packtools");
let utils = new jsPacktools();
```

How can it be used?

```javascript
utils.customDate("05/01/2019", "yyyy-mm-dd")
//2019-05-01

utils.createFolders("backups")
// /backups/2019_05_01/
```

## List of Content
The functions of this pack are divided into categories. so that it is easier to find a function that is out of line with your needs.

| functions         | category            | since | description                                           |
|-------------------|---------------------|-------|-------------------------------------------------------|
| :fire: logError          | Global              | 0.1.x | Create a document with log error.                     |
| :fire: logExecution      | Global              | 0.1.x | Used for tracking, create a document                  |
| :seedling: [**customDate**](https://jasp402.github.io/js-packtools/#/api/customDate)        | Time                | 0.1.x | Customize the date                                    |
| :seedling: [**objectToDate**](https://jasp402.github.io/js-packtools/#/api/objectToDate)      | Time                | 0.1.x | turn an assigned date into an object                  |
| :seedling: [**validateYear**](https://jasp402.github.io/js-packtools/#/api/validateYear)      | Time                | 0.1.x | Valid the year in a date                              |
| :fire: increaseDays      | Time                | 0.1.x | Increase the count days in a date                     |
| :seedling: [**differenceDay**](https://jasp402.github.io/js-packtools/#/api/differenceDay)     | Time                | 0.1.x | Count the difference of day between two date          |
| :speech_balloon: formatSeconds     | Time                | 0.1.x | Get format simply and convert in miliseconds          |
| :fire: generateRageDate  | Time                | 0.1.x | Split a date based in the count of day assign         |
| :seedling: [**createFolders**](https://jasp402.github.io/js-packtools/#/api/createFolders)     | Path and Files      | 0.1.x | Create folder in mode manual or automatic             |
| :fire: validateDir       | Path and Files      | 0.1.x | Validate a path if exist and create in modo recursive |
| :seedling: [**clearFolder**](https://jasp402.github.io/js-packtools/#/api/clearFolder)       | Path and Files      | 0.1.x | Delete all content                                    |
| :speech_balloon: deleteScriptClone | Path and Files      |       | <<PENDING>>                                           |
| :fire: csvToJson         | Path and Files      | 0.1.x | Convert a CSV to JSON                                 |
| :fire: saveProgressData  | Path and Files      |       | <<PENDING>>                                           |
| :fire: groupBy           | Arrays and Object   |       | <<PENDING>>                                           |
| :speech_balloon: getCookies        | Service and Request |       | <<PENDING>>                                           |
| :speech_balloon: waitForExistPDF   | Undefined           |       | <<PENDING>>                                           |

:seedling: **Completed** <br>
:fire: **Developing** <br>
:speech_balloon: **Under discussion** <br>

Please review the [API Doc](https://jasp402.github.io/js-packtools/#/api) section to see all available options.

## Contributing
Check out our [CONTRIBUTING.md](https://jasp402.github.io/js-packtools/#/) to get started with setting up the repo.

If you are looking for something to contribute. You can review our project in [Trello](https://trello.com/b/FMUpri2i/js-packtools) on the "*Features*" board. You can also contact our [Gitter](https://gitter.im/js-packtools/community) channel if you have any questions about where to start contributing.

> *Thanks to these wonderful people (for their contribution)*

|      |       |
|------------|-------------|
|  <center><img src="https://avatars2.githubusercontent.com/u/22778784?s=460&v=4" width="100"></center><br><center>[Gustavo Cacharuco](https://github.com/Gztabo21)</center> |  <center><img src="https://avatars1.githubusercontent.com/u/8978470?s=460&v=4" width="100"></center><br><center>[Jesús Pérez](https://github.com/jasp402)</center> |


## License
This repository is under an [MIT](https://raw.githubusercontent.com/jasp402/js-packtools/master/LICENSE) License <br>
**Copyright 2019** | All rights reserved to [**Jasp402**](http://jasp402.com/)

