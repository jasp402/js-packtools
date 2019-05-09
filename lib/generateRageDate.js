module.exports = function(lastDate, splitDay=15){
    let currentDate = this.customDate();
    let startDate = (this.differenceDay(lastDate, currentDate, false) / splitDay) > 1
        ? new Array(Math.ceil(this.differenceDay(lastDate,currentDate, false)/splitDay)).fill(lastDate).map((x,i)=>this.customDate(x, false, splitDay*(i)))
        : [lastDate];
    return startDate;
};