## LogError

```javascript
logError(message, [color=Red]) ⇒ void
```

`Available since | 0.1.13`

?> This create a file with message that you assign and include time stamp.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| message | <code>string</code> | <code></code> |  Message with description the error |
| color | <code>string</code> | <code>red | green | blue | lime | violet | </code> | Change the color of letters that shows on the screen. |

```js
//Example NodeJs
var jsPacktools = require("js-packtools")
let u = new jsPacktools();
u.logError('Resgister new Error');
```

`Return`

This function don't have return. But create a new document by default data/log Error.log
and add a record in this file. with set message.