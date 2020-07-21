const assert = require('assert');
const jsPackTools = require('../index');
let u = new jsPackTools();

describe('SUITE - modStart()', function () {
    it('TEST # 1, Transform a string in another with replacement string', function () {
        // Logic: Create a string 'abc' duplicate it to n, and add 'test' to the end
        assert.equal(u.modStart('test', 10, 'abc'),'abcabctest');
    });
});

describe('SUITE - modStart()', function () {
    it('TEST # 2, Transform a string in another with out replacement string', function () {
        // Logic: Create a string ' ' duplicate it to n, and add 'test' to the end
        assert.equal(u.modStart('test', 10),'      test');
    });
});
