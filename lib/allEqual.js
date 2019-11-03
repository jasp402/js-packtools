/**
 * @function allEqual
 * @augments Arrays/Object
 * @param  {array} arr
 * @returns {boolean}
 * @version 1.0.0
 * @description This snippet checks whether all elements of the array are equal.
 * @link https://gist.github.com/fatosmorina/c8b1fba08b03f10a8fd0f938f690bf80/raw/fc8c0e7a2449483112f969a165533aecaefb8afa/all_equal.js
 */
module.exports =  arr => arr.every(val => val === arr[0]);