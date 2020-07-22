const jsPackTools = require('../index')();
const assert      = require('assert');
const fs          = require('fs');

let file = '';

describe('SUITE - csvToJson()',  () => {

    before('read a file in format CSV', () => {
        file = fs.readFileSync(__dirname + '/csv.test.csv', 'utf-8');
    });

    it('TEST # 1, Convert a CSV file in object JSON', () => {
        //convert in object a variable that contain data separate for comma
        let objCSV = JSON.parse(jsPackTools.csvToJson(file));
        assert.ok(objCSV[13].functions === 'csvToJson');
    });

});