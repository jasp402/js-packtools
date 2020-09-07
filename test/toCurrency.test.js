//const {toCurrency} = require('../index')();
const assert = require('assert');
const currency = require('../lib/toCurrency');


describe('SUITE - toCurrency()',  () => {

    it('TEST # 1, Default currency',  () => {
      currency();
      assert.strictEqual(
        "2000".toCurrency(),
        '2,000'
      );
    });

    it('TEST # 2, Default currency with local style decimal',  () => {
      currency();
      assert.strictEqual(
        "2000".toCurrency({style:'decimal'}),
        '2,000'
      );
    });

    it('TEST # 3, Global style decimal and local fraction digits',  () => {
      currency('de-DE', {style: 'decimal'});
      assert.strictEqual(
        "2000".toCurrency({ minimumFractionDigits: 2}),
        "2,000.00"
      );
    });

    it('TEST # 4, USD currency and local fraction digits',  () => {
      currency('en-US', {style: 'currency', currency:'USD', currencyDisplay: 'symbol'});
      assert.strictEqual(
        "2000".toCurrency({ minimumFractionDigits: 1, maximumFractionDigits: 3}),
        "$2,000.0"
      );
    });

    it('TEST # 5, Default currency and alternative local with currency',  () => {
      currency(null, {currencyDisplay: 'name'});
      assert.strictEqual(
        "2000".toCurrency({style: 'currency', currency: 'JPY'}, 'ja-JP'),
        "2,000 JPY"
      );
    });

    it('TEST # 6, No number provide',  () => {
      currency(null, null);
      assert.strictEqual(
        "abc".toCurrency(),
        "Invalid integer"
      );
    });

    it('TEST # 7, All Local params provides, with the Third param',  () => {
      const number = 18000.1;
      currency("de-DE", {style: 'decimal', minimumFractionDigits: 2}, true);
      assert.strictEqual(
        number.toCurrency('en-US'),
        '18.000,10'
      );
    });


    it('TEST # 8, Only Third param provide',  () => {
      const number = 1200000.15;
      currency(null, null, true);
      assert.strictEqual(
        number.toCurrency(),
        '1.200.000,15'
      );
    });
});
