const assert = require('assert');
const jsPackTools = require('../index')();

const exampleData_1 = {
    "id"        : 1,
    "first_name": "Marcus",
    "last_name" : "Thorrold",
    "email"     : "mthorrold0@amazon.com",
    "gender"    : "Male",
    "ip_address": "250.153.225.67"
};

const exampleData_2 = [{
    "id"        : 1,
    "first_name": "Chris",
    "last_name" : "Arens",
    "email"     : "carens0@salon.com",
    "gender"    : "Male",
    "ip_address": "81.32.218.87"
}, {
    "id"        : 2,
    "first_name": "Isabeau",
    "last_name" : "Hendricks",
    "email"     : "ihendricks1@craigslist.org",
    "gender"    : "Female",
    "ip_address": "14.40.105.22"
}];

describe('SUITE - objectFilter()', function () {
    it('TEST # 1, Filter object by value', function () {
        assert.strict(
            jsPackTools.objectFilter(exampleData_1, ['first_name', 'gender', 'email']),
            {
                first_name: 'Marcus',
                email     : 'mthorrold0@amazon.com',
                gender    : 'Male'
            });
    });

    it('TEST # 2, Filter array of object by value', function () {
        assert.strictEqual(
            JSON.stringify(jsPackTools.objectFilter(exampleData_2, ['email', 'ip_address'])),
            JSON.stringify([
                { email: 'carens0@salon.com', ip_address: '81.32.218.87' },
                { email: 'ihendricks1@craigslist.org', ip_address: '14.40.105.22' }
            ])
        );
    });

    it('TEST # 2, Test error case value is not instance to object', function () {
        assert.throws(
            () => {
                jsPackTools.objectFilter(exampleData_2, ['mail','ip_address']);
            },
            Error
        );
    });

});