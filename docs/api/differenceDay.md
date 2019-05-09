## differenceDay

```javascript
differenceDay(startDate, endDate) ⇒ string | Object
```

`Available since | 0.1.0`

?> Return the number of days between 2 dates.

| Param | Type | Description |
| --- | --- | --- |
| _startDate | <code>string</code> |  [format=mm/dd/yyyy] date init. |
| _endDate | <code>string</code> | [format=mm/dd/yyyy] date end. |

```js
//Example NodeJs
var jsPacktools = require("js-packtools")
let u = new jsPacktools();
u.differenceDay('05/01/2019','05/15/2019'); // => 14
```

[runkit website](https://jasp402.github.io/js-packtools/examples/differenceDay.html ':include :type=iframe width=100% height=100%')
