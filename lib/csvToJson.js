module.exports = function(csv){
    const [firstLine, ...lines] = csv.split(/\r|\n/g);
    return lines.map(line => firstLine.replace(/\s+/g,'_').split(',').reduce((curr, next, index) => ({
        ...curr,
        [next]: line.split('",')[index].replace(/\"/g,''),
    }), {}));
};