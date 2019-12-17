/**
 * @function capitalLetter
 * @augments String
 * @param  {string} str
 * @param  {boolean} all - false ~ if true, capitalize all words.
 * @returns {string}
 * @version 1.1.0
 * @description capitalize the first letter of a sentence.
 */
module.exports = (str, all = false) => {
    return (all)
        ? str.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')
        : str.charAt(0).toUpperCase() + str.slice(1)
};
 