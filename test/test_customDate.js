describe('TEST # 1 - Test of integrity all functions', function () {
    it('Test, function customDate()', function () {
        // Logic: custom date, add format, increment day or show how string or Object Date
        assert.equal(typeof u.customDate(), 'string');
        assert.equal(typeof u.customDate(false, false, false, true), 'object');
        // Logic: change format
        assert.equal(u.customDate('05/01/2019', 'yyyy-mm-dd'), '2019-05-01');
        // Logic: change format + add days
        assert.equal(u.customDate('05/01/2019', 'yyyy-mm-dd', 15), '2019-05-16');
        // Logic: change format + add days + change out to object date
        assert.equal(typeof u.customDate('05/01/2019', 'yyyy-mm-dd', 15, true), 'object');
    })
});