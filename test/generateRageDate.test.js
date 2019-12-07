const jsPackTools = require('../index');
let u = new jsPackTools();

describe('SUITE - generateRageDate()', function () {
    it('TEST # 1, Generate days ', function () {
        console.log(u.generateRageDate('01/01/2019', 4));
    });
});