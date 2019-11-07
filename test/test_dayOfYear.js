const assert = require('assert');
const jsPackTools = require('../index');
let u = new jsPackTools();

describe('SUITE - MediTooc()', function () {
    it('TEST # 1, get number of day', function () {
        // Logic: custom date, add format, increment day or show how string or Object Date
        console.log(u.dayOfYear("01/01/2019"));
    });
});