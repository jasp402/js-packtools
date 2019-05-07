const assert = require('assert');
const utils = require('../index');
let u = new utils();

describe('TEST # 1 - Test of integrity all functions', function () {
    it('should, check all defined functions', function () {
        assert.ok(typeof u.customDate === 'function');
        assert.ok(typeof u.differenceDay === 'function');
    });

    it('should, Current Date in format string',function () {
        console.log(u.customDate());
        assert.ok(typeof u.customDate() === 'string');
    })
});


