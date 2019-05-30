const assert = require('assert');
const jsPackTools = require('../index');
let u = new jsPackTools();

describe('SUITE - logError()', function () {
    it('TEST # 1, return  new document', function () {
        // Logic: create un new file
        u.logExecution('test # 1');
       
    });
    it('TEST #2 , create file  simple',function(){
        //logic: create a new file
        u.logExecution('Test #2');
    })

    
});