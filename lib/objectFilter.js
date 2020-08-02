/**
 * @function objectFilter
 * @augments Arrays/Object
 * @param  {array|object} dataSet -  ~ Object or array to object with dataSet
 * @param {array} array -  ~ Array of the key names you want to get in the filter
 * @returns {array|object}
 * @version 1.1.0
 * @description This fragment allows you to filter an object and return the key and its corresponding value
 * @example
 */

module.exports = function (dataSet, array) {
    const callback = key => array.includes(key);
    Object.prototype.fromEntries = l => l.reduce((a, [k, v]) => ({...a, [k]: v}), {});

    if(this.is(Array, dataSet)){
        if(!array.map(key=>Object.keys(dataSet[0]).includes(key)).every(Boolean) || !array.length) throw Error('Keys not fount in Object!');
        return dataSet.map(data => {
            const filtered = Object.entries(data).filter(([key, value]) => callback(key, value));
            return Object.fromEntries(filtered);
        });
    }
    if(this.is(Object, dataSet)){
        if(!array.map(key=>Object.keys(dataSet).includes(key)).every(Boolean) || !array.length) throw Error('Keys not fount in Object!');
        const filtered = Object.entries(dataSet).filter(([key, value]) => callback(key, value));
        return Object.fromEntries(filtered);
    }
};