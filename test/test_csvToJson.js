const jsPackTools = require('../index');
const fs = require('fs');
const assert = require('assert');

let u = new jsPackTools();

describe('SUITE - csvToJson()', function () {

    it('TEST # 1, Convert a CSV file in object JSON', function () {
        // Logic: read a file in format CSV
        let file = fs.readFileSync(__dirname+'/test_csv.csv', 'utf-8');
        //convert in object a variable that contain data separate for comma
        let objCSV = JSON.parse(u.csvToJson(file));
        assert.ok(objCSV[13].functions === 'csvToJson');
    });

});