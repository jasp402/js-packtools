module.exports = function(startDate, finalDate,  days = 15) {
    let endDate = finalDate || this.customDate();
    let dayDiffer = this.differenceDay(startDate, endDate, false);
    return (dayDiffer > days) ? this.customDate(startDate, '', days) : this.customDate(startDate, '', Number(dayDiffer));
};