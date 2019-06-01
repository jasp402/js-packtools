## clearFolder

```javascript
clearFolder(path) ⇒ object
```

`Disponible desde | 0.1.13`

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

`Return`

```
{
  files: Array,     //array with name of files
  deleted: NaN,     //number of files deleted
  pending: NaN      //if result > 0 is error. Missing files for deleted.
}
```