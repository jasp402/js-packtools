const jsPackTools = require('../index');
let u = new jsPackTools();

describe('SUITE - clearFolder()', function () {

    it('TEST # 1, Delete content in a folder', function () {
        //Logic: create folder
        u.writeLog('testing');

        // Logic: just delete the contents of a folder without deleting the container folder
        u.clearFolder(__dirname+'/../DATA/'+u.folderFromatDate+'/');
    });

});