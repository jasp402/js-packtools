/**
 * @function capitalLetter
 * @augments String
 * @param  {array|string|boolean} arg - string/boolean ~ any word or sentence
 * @returns {string} -
 * @version 2.0.0
 * @description capitalize the first letter of a sentence or all letters if second parameters is `true`.
 * @example https://gist.githubusercontent.com/jasp402/baad045d810c9c22450ff33bec3e8217/raw/77c42447ff5eca19f22042abaed1a0ea6bca439e/0-e.g.__capitalLetter.js
 * @example https://gist.githubusercontent.com/jasp402/2a72358a90bd433cd15e700d62190def/raw/fecdc9c3a790b7c0e93f53309cb5b3d9a0f9f08c/1-e.g.__capitalLetter.js
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