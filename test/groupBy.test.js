const jsPackTools = require('../index')();
const assert      = require('assert');

const OBJECT_PEOPLES = [
    {
        name  : "patrick",
        age   : 20,
        gender: "woman"
    },
    {
        name  : "Richart",
        age   : 19,
        gender: "man"
    },
    {
        name  : "Michell",
        age   : 21,
        gender: "woman"
    }];

describe('SUITE - groupBy()',  () => {
    it('TEST # 1, decomposes a date on an object',  () => {
        assert.strictEqual(JSON.stringify(Object.keys(jsPackTools.groupBy(OBJECT_PEOPLES, "gender"))), JSON.stringify(['woman','man']))
    });
});