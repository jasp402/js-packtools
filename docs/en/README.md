<p align="center">
    <a href="#">
        <img alt="js-packtools" src="https://repository-images.githubusercontent.com/185065568/99338980-6f4c-11e9-95ca-045dfeca2f45" width="546">
    </a>
</p>
<p align="center">
    🍍 A small collection of tools for the development of javascript & NodeJS.
</p>
<p align="center">
    <a href="https://www.npmjs.com/package/js-packtools">
        <img alt="npm" src="https://img.shields.io/npm/v/js-packtools.svg?logo=npm">
    </a>
    <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/jasp402/js-packtools?logo=github">
    <a href="https://travis-ci.org/jasp402/js-packtools">
        <img alt="Travis (.org)" src="https://img.shields.io/travis/jasp402/js-packtools?logo=travis">
    </a>
    <a href="https://david-dm.org/jasp402/js-packtools">
        <img alt="Dependencies" src="https://david-dm.org/jasp402/js-packtools/status.svg">
    </a>
    <img alt="npm" src="https://img.shields.io/npm/dt/js-packtools?logo=npm">
    <a href="https://trello.com/b/FMUpri2i/js-packtools">
            <img alt="Trello" src="https://img.shields.io/badge/project-on%20Trello-blue.svg?logo=trello">
    </a>
    <a href="https://gitter.im/js-packtools/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge">
        <img alt="Gitter" src="https://img.shields.io/gitter/room/jasp402/js-packtools?logo=gitter">
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

## 🤷‍ What is JS-PackTools?

👨‍🏫 This is a repository of utilities. What started out as a couple of ideas quickly turned into a class that grouped together various types of functionality. The intention of this package is to group a set of helpers and / or utilities, to facilitate routine work, especially related to Backend in node and webScraping.

💬 Welcome to the **JS PackTools** documentation. It will help you get started fast. If you're having trouble, you can find help and answers on our [Gitter channel](https://gitter.im/js-packtools/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge).
We have also incorporated a [WhatsApp](https://chat.whatsapp.com/BXDLjGNJaqN0NmzPQ3cjvH) group, with the entire development team if you want to be part of it.

## Requirement
- [nodejs](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

can you use by default `npm`
```npm
npm i js-packtools -S
```

or your can use `yarn`
```npm
yarn add js-packtools
```

## how is it used
Only instances the library and ready! Parentheses at the end allow you to pass values to the constructor.
```js
const jsPackTools = require("js-packtools")();
//ready to be used... easy, right?
```

You can also order only the features you need. using By using the [destructuring assignment](https://javascript.info/destructuring-assignment) method, we can simplify things even more.
```js
const { capitalLetter, modStart } = require("js-packtools")();
```

#### - List available functions

You can use the `jsPackTools.info().names` function to display a list of available functions

```js
 jsPackTools.info().names; 

//"allEqual"
//"capitalLetter"
//"clearFolders"
//"createFolders"
//"csvToJson"
//"customDate"
//"dayOfYear"
//"deleteFile"
//"differenceDay"
//"everyOrNone"
//"formatSeconds"
// ... 
```
<sub> Try it yourself in <a href="https://runkit.com/embed/47xmru66fj0s">https://runkit.com/embed/47xmru66fj0s</a></sub>

#### - See a details of the functions
Can use the name of function in info E.g. `jsPackTools.info().customDate`This generates in response an object like this
```
{
    category    : "Time/Date"
    description : "It's a date control. Without parameters give the current date, use the parameters to customize its functionality."
    name        : "customDate"
    test        : null
    version     : "1.0.0"
}
```
<sub> Try it yourself in <a href="https://runkit.com/embed/aqbxbxzkrkdw">https://runkit.com/embed/aqbxbxzkrkdw</a></sub>

#### - Using one of these functions
In Js-PackTools each function fulfills a specific objective, but it can solve hundreds of different problems.
Each function has its section in the documentation that will allow you to know in detail what the possibilities of said function are.

For example, the [validateYear()](https://jasp402.github.io/js-packtools/#/en/api/v1/validateYear) function can have many implications. (see image)
![carbon (4)](https://user-images.githubusercontent.com/8978470/88460379-72b78200-ce61-11ea-9ecf-6b77b517d770.png)

## Content list
The functions of this package are divided into categories. to make it easier to find a function that is out of line with your needs.

>## Arrays/Object 

| Functions Name | version | Category | Description |
|---|---|---|---|
|:seedling:  [**allEqual**](/en/api/v1/allEqual.md)  | 1.0.0 | Arrays/Object | <sub>This snippet checks whether all elements of the array are equal.</sub> |
|:seedling:  [**everyOrNone**](/en/api/v1/everyOrNone.md)  | 1.0.0 | Arrays/Object | <sub>This snippet returns true if the predicate function returns true for a...</sub> |
|:seedling:  [**groupBy**](/en/api/v1/groupBy.md)  | 1.0.0 | Arrays/Object | <sub>Sort the object by placing the value of the assigned property as key</sub> |
>## String 

| Functions Name | version | Category | Description |
|---|---|---|---|
|:seedling:  [**capitalLetter**](/en/api/v1/capitalLetter.md)  | 1.1.0 | String | <sub>capitalize the first letter of a sentence.</sub> |
|:seedling:  [**modStart**](/en/api/v1/modStart.md)  | 1.0.1 | String | <sub>Using a string to create a new string with new size.</sub> |
>## Path/Files 

| Functions Name | version | Category | Description |
|---|---|---|---|
|:seedling:  [**clearFolder**](/en/api/v1/clearFolder.md)  | 1.0.0 | Path/Files | <sub>This simply clear the content a folder.</sub> |
|:seedling:  [**createFolders**](/en/api/v1/createFolders.md)  | 1.0.0 | Path/Files | <sub>This create a folder whit sub-folder of date by default if param `with...</sub> |
|:seedling:  [**deleteFile**](/en/api/v1/deleteFile.md)  | 1.0.0 | Path/Files | <sub>Check if the file exists before deleting</sub> |
|:seedling:  [**getFinalPath**](/en/api/v1/getFinalPath.md)  | 1.0.0 | Path/Files | <sub>Create structure of folders with parameters in constructor.</sub> |
|:seedling:  [**renameFiles**](/en/api/v1/renameFiles.md)  | 1.0.0 | Path/Files | <sub>This function rename a batch of files with current date or token uniqu...</sub> |
|:seedling:  [**validateDir**](/en/api/v1/validateDir.md)  | 1.0.0 | Path/Files | <sub>Validate if there is a route. if not, create this route.</sub> |
>## convert 

| Functions Name | version | Category | Description |
|---|---|---|---|
|:seedling:  [**csvToJson**](/en/api/v1/csvToJson.md)  | 1.0.0 | convert | <sub>This read a document CSV and convert in a Object Javascript (JSON).</sub> |
>## Time/Date 

| Functions Name | version | Category | Description |
|---|---|---|---|
|:seedling:  [**customDate**](/en/api/v1/customDate.md)  | 1.0.0 | Time/Date | <sub>It's a date control. Without parameters give the current date, use the...</sub> |
|:seedling:  [**dayOfYear**](/en/api/v1/dayOfYear.md)  | 1.0.0 | Time/Date | <sub>This snippet gets the day of the year from a Date object.</sub> |
|:seedling:  [**differenceDay**](/en/api/v1/differenceDay.md)  | 1.0.0 | Time/Date | <sub>This simply clear the content a folder.</sub> |
|:seedling:  [**formatSeconds**](/en/api/v1/formatSeconds.md)  | 1.0.1 | Time/Date | <sub>This only format a value float</sub> |
|:seedling:  [**generateRageDate**](/en/api/v1/generateRageDate.md)  | 1.0.0 | Time/Date | <sub>This function allows you to separate a given date in the number of day...</sub> |
|:seedling:  [**increaseDays**](/en/api/v1/increaseDays.md)  | 1.0.0 | Time/Date | <sub>Add days to date, can defined a maxDate.</sub> |
|:seedling:  [**objectToDate**](/en/api/v1/objectToDate.md)  | 1.0.0 | Time/Date | <sub>Generate a object with date details.</sub> |
|:seedling:  [**parseDate**](/en/api/v1/parseDate.md)  | 1.0.1 | Time/Date | <sub>Using a string and a format transform the string in date.</sub> |
|:seedling:  [**timeToDate**](/en/api/v1/timeToDate.md)  | 1.0.1 | Time/Date | <sub>return the time between two dates, or a date and now</sub> |
|:seedling:  [**validateYear**](/en/api/v1/validateYear.md)  | 1.0.0 | Time/Date | <sub>Can be current year or spend the year to validate</sub> |
>## global 

| Functions Name | version | Category | Description |
|---|---|---|---|
|:seedling:  [**writeLog**](/en/api/v1/writeLog.md)  | 1.0.0 | global | <sub>write file .log in folder default of class.</sub> |
|:seedling:  [**writeLogError**](/en/api/v1/writeLogError.md)  | 1.0.0 | global | <sub>write file .log in folder default of class.</sub> |
|:seedling:  [**_log**](/en/api/v1/_log.md)  | 1.0.0 | global | <sub>It integrates the functions registry of errors and registry of executi...</sub> |


:seedling: **Completed** <br>
:fire: **In Development** <br>
:speech_balloon: **proposal** <br>
⛔ **deprecated** <br>

You can review the details of each function bif you have any questions about where to start contributing.y clicking on their links. for more information enter [Documentación API](https://jasp402.github.io/js-packtools/#/en/api).

## contributor
Take a look at our document  [CONTRIBUTING.md](https://jasp402.github.io/js-packtools/#/es/contribute) to start configuring the repository.
If you are looking for something to contribute. You can review our project in [Trello](https://trello.com/b/FMUpri2i/js-packtools) 
You can also contact our channel [Gitter](https://gitter.im/js-packtools/community) if you have any questions about where to start contributing.

> *Thanks to these people who have helped and motivated to improve this tool more and more.*

|      |     |             |
|------------|-------------|-------------|
|  <center><img src="https://avatars3.githubusercontent.com/u/52681689?s=460&u=e800836334e1cb7a52b45b2fb21bb7d2cd90eb19&v=4" width="100"></center><br><center>[Diego Andrés](https://github.com/dandresfg)</center>|  <center><img src="https://avatars2.githubusercontent.com/u/22778784?s=460&v=4" width="100"></center><br><center>[Gustavo Cacharuco](https://github.com/Gztabo21)</center> |  <center><img src="https://avatars1.githubusercontent.com/u/8978470?s=460&v=4" width="100"></center><br><center>[Jesús Pérez](https://github.com/jasp402)</center> |


## License
this repository is under a license [MIT](https://raw.githubusercontent.com/jasp402/js-packtools/master/LICENSE)  <br>
**Copyright 2019** | All rights reserved to [**Jasp402**](http://jasp402.com/)

