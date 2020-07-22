const customOptions = {
    folderName    : "test",
    folderWithDate: false
};
const jsPackTools = require('../index')(customOptions);
const assert = require('assert');


describe('SUITE - getFinalPath()', () => {
    it('TEST # 1, return path', () => {
        assert.strictEqual(jsPackTools.getFinalPath(), "test/");
    });
});