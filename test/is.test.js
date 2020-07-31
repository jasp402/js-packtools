const {is}   = require('../index')();
const assert = require('assert');

describe('SUITE - is()', function () {

    it('TEST # 1, Evaluate type Array', function () {
        assert.strictEqual(is(Array, [1]), true);
    });

    it('TEST # 2, Evaluate type ArrayBuffer', function () {
        assert.strictEqual(is(ArrayBuffer, new ArrayBuffer()), true);
    });

    it('TEST # 3, Evaluate type Map', function () {
        assert.strictEqual(is(Map, new Map()), true);
    });

    it('TEST # 4, Evaluate type RegExp', function () {
        assert.strictEqual(is(RegExp, /./g), true);
    });

    it('TEST # 5, Evaluate type Set', function () {
        assert.strictEqual(is(Set, new Set()), true);
    });

    it('TEST # 6, Evaluate type WeakMap', function () {
        assert.strictEqual(is(WeakMap, new WeakMap()), true);
    });

    it('TEST # 7, Evaluate type WeakSet', function () {
        assert.strictEqual(is(WeakSet, new WeakSet()), true);
    });

    it('TEST # 8, Evaluate type String', function () {
        assert.strictEqual(is(String, ''), true);
    });

    it('TEST # 9, Evaluate type String', function () {
        assert.strictEqual(is(String, new String('')), true);
    });

    it('TEST # 10, Evaluate type Number', function () {
        assert.strictEqual(is(Number, 1), true);
    });

    it('TEST # 11, Evaluate type Number', function () {
        assert.strictEqual(is(Number, new Number(1)), true);
    });

    it('TEST # 12, Evaluate type Boolean', function () {
        assert.strictEqual(is(Boolean, true), true);
    });

    it('TEST # 13, Evaluate type Boolean', function () {
        assert.strictEqual(is(Boolean, new Boolean(true)), true);
    });



});