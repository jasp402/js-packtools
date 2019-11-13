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
    <a href="https://jasp402.github.io/js-packtools/#/en/">Getting Started</a> |
    <a href="https://jasp402.github.io/js-packtools/#/en/api">API Docs</a> |
    <a href="https://jasp402.github.io/js-packtools/#/en/help">help & Support</a> |
    <a href="https://jasp402.github.io/js-packtools/#/en/donate">Contribute</a>
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

| Functions Name | version | Category | Description |
|---|---|---|---|
|:seedling:  [**allEqual**](/en/api/v1/allEqual.md)  | 1.0.0 | Arrays/Object | <sub>This snippet checks whether all elements of the array are equal.</sub> |
|:seedling:  [**everyOrNone**](/en/api/v1/everyOrNone.md)  | 1.0.0 | Arrays/Object | <sub>This snippet returns true if the predicate function returns true for a...</sub> |
|:seedling:  [**groupBy**](/en/api/v1/groupBy.md)  | 1.0.0 | Arrays/Object | <sub>Sort the object by placing the value of the assigned property as key</sub> |
|:seedling:  [**clearFolder**](/en/api/v1/clearFolder.md)  | 1.0.0 | Path/Files | <sub>This simply clear the content a folder.</sub> |
|:seedling:  [**createFolders**](/en/api/v1/createFolders.md)  | 1.0.0 | Path/Files | <sub>This create a folder whit sub-folder of date by default if param `with...</sub> |
|:seedling:  [**deleteFile**](/en/api/v1/deleteFile.md)  | 1.0.0 | Path/Files | <sub>Check if the file exists before deleting</sub> |
|:seedling:  [**getFinalPath**](/en/api/v1/getFinalPath.md)  | 1.0.0 | Path/Files | <sub>Create structure of folders with parameters in constructor.</sub> |
|:seedling:  [**validateDir**](/en/api/v1/validateDir.md)  | 1.0.0 | Path/Files | <sub>Validate if there is a route. if not, create this route.</sub> |
|:seedling:  [**csvToJson**](/en/api/v1/csvToJson.md)  | 1.0.0 | convert | <sub>This read a document CSV and convert in a Object Javascript (JSON).</sub> |
|:seedling:  [**customDate**](/en/api/v1/customDate.md)  | 1.0.0 | Time/Date | <sub>It's a date control. Without parameters give the current date, use the...</sub> |
|:seedling:  [**dayOfYear**](/en/api/v1/dayOfYear.md)  | 1.0.0 | Time/Date | <sub>This snippet gets the day of the year from a Date object.</sub> |
|:seedling:  [**differenceDay**](/en/api/v1/differenceDay.md)  | 1.0.0 | Time/Date | <sub>This simply clear the content a folder.</sub> |
|:seedling:  [**formatSeconds**](/en/api/v1/formatSeconds.md)  | 1.0.0 | Time/Date | <sub>This only format a value float</sub> |
|:seedling:  [**generateRageDate**](/en/api/v1/generateRageDate.md)  | 1.0.0 | Time/Date | <sub>This function allows you to separate a given date in the number of day...</sub> |
|:seedling:  [**increaseDays**](/en/api/v1/increaseDays.md)  | 1.0.0 | Time/Date | <sub>Add days to date, can defined a maxDate.</sub> |
|:seedling:  [**objectToDate**](/en/api/v1/objectToDate.md)  | 1.0.0 | Time/Date | <sub>Generate a object with date details.</sub> |
|:seedling:  [**parseDate**](/en/api/v1/parseDate.md)  | 1.0.0 | Time/Date | <sub>Using a string and a format transform the string in date.</sub> |
|:seedling:  [**validateYear**](/en/api/v1/validateYear.md)  | 1.0.0 | Time/Date | <sub>Can be current year or spend the year to validate</sub> |
|:seedling:  [**writeLog**](/en/api/v1/writeLog.md)  | 1.0.0 | global | <sub>write file .log in folder default of class.</sub> |
|:seedling:  [**writeLogError**](/en/api/v1/writeLogError.md)  | 1.0.0 | global | <sub>write file .log in folder default of class.</sub> |
|:seedling:  [**_log**](/en/api/v1/_log.md)  | 1.0.0 | global | <sub>It integrates the functions registry of errors and registry of executi...</sub> |

:seedling: **Completed** <br>
:fire: **Developing** <br>
:speech_balloon: **Under discussion** <br>

Please review the [API Doc](https://jasp402.github.io/js-packtools/#/en/api) section to see all available options.

## Contributing
Check out our [CONTRIBUTING.md](https://jasp402.github.io/js-packtools/#/en/) to get started with setting up the repo.

If you are looking for something to contribute. You can review our project in [Trello](https://trello.com/b/FMUpri2i/js-packtools) on the "*Features*" board. You can also contact our [Gitter](https://gitter.im/js-packtools/community) channel if you have any questions about where to start contributing.

> *Thanks to these wonderful people (for their contribution)*

|      |       |
|------------|-------------|
|  <center><img src="https://avatars2.githubusercontent.com/u/22778784?s=460&v=4" width="100"></center><br><center>[Gustavo Cacharuco](https://github.com/Gztabo21)</center> |  <center><img src="https://avatars1.githubusercontent.com/u/8978470?s=460&v=4" width="100"></center><br><center>[Jesús Pérez](https://github.com/jasp402)</center> |


## License
This repository is under an [MIT](https://raw.githubusercontent.com/jasp402/js-packtools/master/LICENSE) License <br>
**Copyright 2019** | All rights reserved to [**Jasp402**](http://jasp402.com/)

