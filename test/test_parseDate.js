const assert = require('assert');
const jsPackTools = require('../index');
let u = new jsPackTools();

describe('SUITE - customDate()', function () {
    it('TEST # 1, ', function () {
        // Logic: parse date with set meridian and convert 12 hours per 24 hours
        console.log(u.parseDate('2/06/19 6:13 p. m.', 'D/MM/YY h:mm x. x.'));
    });
});