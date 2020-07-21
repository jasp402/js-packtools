## customDate 

```javascript
customDate([date], [format], [addDay], [type]) ⇒ string | Object
```
`Available since | 0.1.0`

?> It's a date control. Without parameters give the current date, use the parameters to customize its functionality. 

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [date] | <code>string</code> | <code>&quot;{Object}&quot;</code> | date or Object Date by Default is current date. |
| [format] | <code>string</code> | <code>&quot;mm/dd/yyyy&quot;</code> | define the format that want to return. |
| [addDay] | <code>int</code> | <code>0</code> | count of days that add to date o current date |
| [type] | <code>boolean</code> | <code>false</code> | method to return {string} or {Object Date} |

```js
//Example NodeJs
    var jsPacktools = require("js-packtools")
    let u = new jsPacktools();
    u.customDate('05/01/2019', 'yyyy-mm-dd', 15, false);  // => 2019-05-15
```

[runkit website](https://jasp402.github.io/js-packtools/examples/customDate.html ':include :type=iframe width=100% height=100%')
