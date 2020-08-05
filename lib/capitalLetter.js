/**
 * @function capitalLetter
 * @augments String
 * @param  {array|string|boolean} arg - string/boolean ~ any word or sentence
 * @returns {string} -
 * @version 2.0.0
 * @description capitalize the first letter of a sentence or all letters if second parameters is `true`.
 * @example https://gist.githubusercontent.com/jasp402/baad045d810c9c22450ff33bec3e8217/raw/674c7135f93dec30cfbef482a6def3b62576a7cd/capitalLetter.js
 */

function capitalLetter(...arg){
    let str = '';
    let all = false;

    if(!arg.length){
        str = this
    }else if(arg && typeof arg[0] === 'boolean'){
        str = this;
        all = arg[0];
    }else{
        str = arg[0];
        all = arg[1];
    }
    return (all)
        ? str.split(' ').map(word => `${word[0].toUpperCase()}${word.slice(1)}`).join(' ')
        : str.charAt(0).toUpperCase() + str.slice(1)
}

module.exports = capitalLetter;
String.prototype.capitalLetter = capitalLetter;