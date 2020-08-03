/**
 * @function capitalLetter
 * @augments String
 * @param  {string} str - ~ any word or sentence
 * @param  {boolean} all - false ~ if true, capitalize all words.
 * @returns {string} -
 * @version 1.1.1
 * @description capitalize the first letter of a sentence.
 * @example https://gist.githubusercontent.com/jasp402/baad045d810c9c22450ff33bec3e8217/raw/674c7135f93dec30cfbef482a6def3b62576a7cd/capitalLetter.js
 */
module.exports = (str, all = false) => {
    return (all)
        ? str.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')
        : str.charAt(0).toUpperCase() + str.slice(1)
};
 