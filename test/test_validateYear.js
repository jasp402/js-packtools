const jsPackTools = require('../index');
const assert = require('assert');
let u = new jsPackTools();

describe('',function(){
    it('TEST # 1 , Validate the year',function(){
        //logic:A date is checked last year.
        assert.ok(u.validateYear('05/22/2019','2019'));
    })
})