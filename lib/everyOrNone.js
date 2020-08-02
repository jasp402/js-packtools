/**
 * @function everyOrNone
 * @augments Arrays/Object
 * @param  {array} arr
 * @param {function|boolean} fn - function or conditional for evaluation.
 * @returns {boolean}
 * @version 1.0.0
 * @description This snippet returns true if the predicate function returns true for all elements in a collection and false otherwise. \n You can omit the second argument fn if you want to use Boolean as a default value.
 * @example
 * @link https://gist.github.com/fatosmorina/aa24ba4296d43cfb2c52a3fdaf3d1b36/raw/5bb715c16d457702f9a462910b59b92504070911/all.js
 */
module.exports = (arr, fn = Boolean) => arr.every(fn);

