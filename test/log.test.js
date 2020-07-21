const jsPackTools = require('../index');
const assert = require('assert');
let u = new jsPackTools();

describe('SUITE - _log()', function () {
    it('TEST # 1, create file log from contructor _log()', function () {

        let path = u.getFinalPath();
        let fileLog = 'constructor.log';

        u.createFolders(path);
        u._log("message",fileLog);
    });
});