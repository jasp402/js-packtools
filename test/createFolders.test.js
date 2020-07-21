const jsPackTools = require('../index');
let u = new jsPackTools();

describe('SUITE - createFolders()', function () {

    it('TEST # 1, create folder with sub-folder', function () {
        // Logic: create a folder with recursive date sub-folder
        u.createFolders();
    });

    it('TEST # 2, create folder simple', function () {
        // Logic: create a folder {see: config at constructor}
        u.createFolders("Avengers",false);
    });

});