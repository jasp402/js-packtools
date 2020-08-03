/**
 * @function is
 * @augments validate
 * @param {string} type - array/object/number/string/boolean ~ Define type of element that want evaluate.
 * @param {any} value - ~ Element to evaluate.
 * @returns {boolean} - if {type} correspond to element. Return `true` else `false`
 * @version 1.0.1
 * @description Is a function for evaluate to type of element
 * @example const {is} = require("js-packtools");\nis('array', [1]); //true \nis('object', [1]); //false
 */
module.exports = function (type, value) {
    return ![, null].includes(value) && value.constructor === type
};