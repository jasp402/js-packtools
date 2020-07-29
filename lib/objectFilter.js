/**
 * @function objectFilter
 * @augments Arrays/Object
 * @param  {object} object
 * @param {function} callback - function or conditional for evaluation.
 * @returns {object}
 * @version 1.0.0
 * @description This fragment allows you to filter an object and return the key and its corresponding value
 */

module.exports = (object, callback) => {
    const filtered = Object.entries(object)
        .filter(([key, value]) => callback(key, value));
    return Object.fromEntries(filtered);
};