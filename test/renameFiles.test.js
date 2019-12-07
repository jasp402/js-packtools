const assert = require('assert');
const jsPackTools = require('../index');
let u = new jsPackTools();

describe('SUITE - parseDate()', function () {
    it('TEST # 1, Parse Date with correction day and hour', function () {
        // Logic: parse date with set meridian and convert 12 hours per 24 hours
     let path = u.getFinalPath();
        u.renameFiles(path, "test",  null, 1);
    });
});