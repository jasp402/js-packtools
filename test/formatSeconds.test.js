const jsPackTools = require('../index');
const assert = require('assert');
let u = new jsPackTools();

describe('SUITE - formatSeconds()', function () {

    it('TEST # 1, Parse number', function () {
        console.log(u.formatSeconds('0.45'));
    });

});