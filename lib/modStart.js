/**
 * @function modStart
 * @augments String
 * @param  {string} str - default string.
 * @param  {number} size - new length.
 * @param  {string} _str - replacement string.
 * @returns {string}
 * @version 1.0.1
 * @description Using a string to create a new string with new size.
 */

module.exports = function(str, size, _str){

  if(!str) throw new Error(`the parameters 'str' is required.`);
  if(!size) throw new Error(`the parameters 'size' is required.`);

  if(str.length >= size){
    return str;
  }

  const replace = _str ? _str : " ";

  // String array with the replacement string
  let word = "";
  for (let i = 0; i < size; i++) {
    word+=replace;
  }

  // Cut the array to size - the size of the string, and add the string
  return word.slice(0, size-str.length)+str;
}
