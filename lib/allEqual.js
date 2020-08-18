/**
 * @function allEqual
 * @augments Arrays/Object
 * @param  {array} arr
 * @returns {boolean}
 * @version 2.0.0
 * @description This snippet checks whether all elements of the array are equal.
 * @example
 * @link https://gist.github.com/fatosmorina/c8b1fba08b03f10a8fd0f938f690bf80/raw/fc8c0e7a2449483112f969a165533aecaefb8afa/all_equal.js
 */
function allEqual(arr){
    arr = arr || this;
    return arr.every(val => val === arr[0])
}
module.exports = allEqual;
Array.prototype.allEqual = allEqual;