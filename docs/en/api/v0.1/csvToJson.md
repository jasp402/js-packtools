## csvToJson

```javascript
csvToJson(csv) ⇒ object
```

`Available since | 0.1.13`

?>  This read a document CSV and convert in a Object Javascript (JSON)

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| csv | <code>string</code> | <code></code> |  document csv in string |

```js
//Example NodeJs
let file = fs.readFileSync(__dirname+'/test_csv.csv', 'utf-8');

let objCSV = JSON.parse(u.csvToJson(file));
assert.ok(objCSV[13].functions === 'csvToJson');
```
