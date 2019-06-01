## objectToDate

```javascript
objectToDate(strTime) ⇒  Object
```
`Available since | 0.1.11`

?> Return a object with date split details


| Param | Type | Description |
| --- | --- | --- |
| strTime | <code>string</code> | date or UNIX date |


```js
//Example NodeJs
var jsPacktools = require("js-packtools")
let u = new jsPacktools();
u.objectToDate('05/01/2019');
 // {
    year: 2019,
    month: 10,
    day: 3,
    hour: 0,
    minute: 0,
    second: 0,
    mlSecond: 0
    }
```

[runkit website](https://jasp402.github.io/js-packtools/examples/objectToDate.html ':include :type=iframe width=100% height=100%')
