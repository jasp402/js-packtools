const {timeToDate} = require('../index')();
const assert = require('assert');

describe('SUITE - timeToDate()',  () => {
    const startAt = '2020/07/23 09:30:56';

    it('TEST # 1, Date greater than one year',  () => {
        const target = '2018/07/21 09:30:00';
        assert.strictEqual(timeToDate(target,startAt), '2 years');
    });

    it('TEST # 2, Date less than 2 months',  () => {
        const target = '2020/06/12 09:30:00';
        assert.strictEqual(timeToDate(target,startAt), '1 month');
    });

    it('TEST # 3, Date less than 1 month',  () => {
        const target = '2020/07/8 09:30:00';
        assert.strictEqual(timeToDate(target,startAt), '2 weeks');
    });

    it('TEST # 4, Date less than 1 week',  () => {
        const target = '2020/07/20 09:30:00';
        assert.strictEqual(timeToDate(target,startAt), '3 days');
    });

    it('TEST # 5, Date less than 1 day',  () => {
        const target = '2020/07/20 09:30:00';
        assert.strictEqual(timeToDate(target,startAt), '3 days');
    });

    it('TEST # 6, Date less than 1 minute',  () => {
        const target = '2020/07/23 06:30:00';
        assert.strictEqual(timeToDate(target,startAt), '3 hours');
    });

    it('TEST # 7, Date less than 1 minute without date start',  () => {

        const target = new Date();
        target.setSeconds(target.getSeconds()-50);

        assert.strictEqual(timeToDate(target), '50 seconds');
    });
});
