/**
 * @function groupBy
 * @augments Arrays/Object
 * @param  {object} obj
 * @param  {string} key
 * @returns {object}
 * @version 1.0.0
 * @description Sort the object by placing the value of the assigned property as key
 * @example
 */
module.exports = function(obj, key) {
    return obj.reduce(function (rv, x) {
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};