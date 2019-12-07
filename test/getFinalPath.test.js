const jsPackTools = require('../index');
const assert = require('assert');
let u = new jsPackTools({
    folderName:"test",
    folderWithDate:false
});
describe('SUITE - getFinalPath()', function () {
    it('TEST # 1, return path', function () {
        assert.equal(u.getFinalPath(), "test/");
    });
});