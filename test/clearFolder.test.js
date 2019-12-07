const jsPackTools = require('../index');
let u = new jsPackTools();

describe('SUITE - clearFolder()', function () {

    it('TEST # 1, Delete content in a folder', function () {
        u.writeLog("testing");
        //Logic: create folder
       u.clearFolder(u.getFinalPath())
    });

});