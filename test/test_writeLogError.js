const assert = require('assert');
const jsPackTools = require('../index');
let u = new jsPackTools();

describe('SUITE - logError()', function () {
    it('TEST # 1, Create throw exception', function () {
        try {
            u.writeLogError('Title Error', 'Message of error with details');
        }catch (e) {
            console.log(e);
        }
    });
});