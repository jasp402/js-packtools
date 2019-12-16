/**
 * @function capitalLetter
 * @augments String
 * @param  {string} str
 * @returns {string}
 * @version 1.0.0
 * @description capitalize the first letter of a sentence.
 */
module.exports = str => str.split('')[0].toUpperCase() + str.slice(1);
 