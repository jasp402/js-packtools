const jsPackTools = require('../index');
const assert = require('assert');
let u = new jsPackTools();

describe('SUITE - groupBy()', function () {
    it('TEST # 1, decomposes a date on an object', function () {
       let ObjectPeople = [{
           name : "patrick",
           age : 20,
           gender : "woman"
       },
           {
               name : "Richart",
               age : 19,
               gender : "man"
           },
           {
               name : "Michell",
               age : 21,
               gender : "woman"
           }];
        console.log(u.groupBy(ObjectPeople, "gender"));
    });
});