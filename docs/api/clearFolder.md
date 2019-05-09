## clearFolder

```javascript
clearFolder(_path) ⇒ void
```

`Available since | 0.1.13`

?> This simply clear the content a folder..

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | path of folder to delete content |

```js
//Example NodeJs
var jsPacktools = require("js-packtools")
let u = new jsPacktools();
u.clearFolder(__dirname+'data\');
```