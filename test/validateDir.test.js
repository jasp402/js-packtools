const jsPackTools = require('../index')();
const assert      = require('assert');
const fs          = require('fs');

const PATH = jsPackTools.getFinalPath();

describe('SUITE - validateDir()',  () =>{

    after('delete folders', () => {
        fs.rmdirSync(`${__dirname}/../${PATH.split('/').slice(0, -1).join('/')}`);
        fs.rmdirSync(`${__dirname}/../${PATH.split('/')[0]}`);
    });

    it('TEST # 1, validate if folder exit',  () =>{
        // Logic: validate if folder exist else not exist create new folder
        jsPackTools.validateDir(PATH);
        assert.ok(fs.existsSync(PATH));
    });

});