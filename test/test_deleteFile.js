const jsPackTools = require('../index');
let u = new jsPackTools();

describe('SUITE - deleteFile()', function () {

    it('TEST # 1, Delete a file from the given route', function () {
        //Logic: create file logExecution.log
        u.logExecution('testing');

        // Logic: just delete the contents of a folder without deleting the container folder
        u.deleteFile(__dirname+'/../DATA/'+u.folderFromatDate+'/logExecution.log');
    });

});