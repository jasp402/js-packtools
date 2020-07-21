## deleteFile

```javascript
deleteFile(path) ⇒ boolean
```
`Available since | 0.1.19`

?> It's Check if the file exists before deleting.

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | Path of file to delete. |

```js
//Example NodeJs
let jsPacktools = require("js-packtools");
let u = new jsPacktools();

    u.writeLog('testing');
    u.deleteFile(__dirname+'/../DATA/'+u.folderFromatDate+'/logExecution.log');
```


