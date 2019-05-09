module.exports = function(time){
    let sec = Number(time).toFixed(3).split('.');
    return _.padStart(sec[0], 3, "0")+'.'+sec[1];
};