const assert = require('assert');
const jsPackTools = require('../index');
let u = new jsPackTools();

describe('SUITE - logError()', function () {
    it('TEST # 1, return  new document', function () {
        // Logic: return new file
        u.writeLogError('test # 1');
       
    });
    it('TEST #2 , create file  simple',function(){
        //logic: create a  file
        setTimeout(function () {
            u.writeLogError('Test #2');
        }, 3500);

    })

    
});