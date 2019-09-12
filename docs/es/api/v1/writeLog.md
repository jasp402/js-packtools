## WriteLog

```javascript
writeLog(path, [auto=folderAutoDate]) ⇒ Boolean
```

`Available since | 0.1.13`

?> This create a folder whit sub-folder of date by default.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| path | <code>string</code> | <code></code> |  Dir of folder to create |
| auto | <code>Boolean</code> | <code>&quot;{true}&quot;</code> |  If false, create subfolder with date |

```js
//Example NodeJs
var jsPacktools = require("js-packtools")
let u = new jsPacktools();
u.writeLog('Resgister new Execution');
```

`Return`

This function don't have return. But create a new File.