const assert = require('assert');
const jsPackTools = require('../index')();


describe('SUITE - modStart()', function () {
    it('TEST # 1, fill one string with another with an assigned length', function () {
        // Logic: Create a string 'abc' duplicate it to n, and add 'test' to the end
        assert.strictEqual(jsPackTools.modStart('99', 4, '0'),'0099');
    });

    it('TEST # 2, Transform a string in another with out replacement string', function () {
        // Logic: Create a string ' ' duplicate it to n, and add 'test' to the end
        assert.strictEqual(jsPackTools.modStart('test', 10),'      test');
    });

});