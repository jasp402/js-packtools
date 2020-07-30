## is 
  ```javascript
 is({constructor}_date, {constructor}_format) ⇒ string|Object 
``` 

 ` Version: 1.0.0 ` 
` Category: validate ` 

### Description 

?> It's a date control. Without parameters give the current date, use the parameters to customize its functionality. 

### Implementation 

| Param | Type | Default value | Description | 
| --- | --- | --- | --- | 
| **{constructor}_date** | `undefined` | ` new Date() ` | _date or Object Date by Default is current date._ | 
| **{constructor}_format** | `undefined` | ` mm/dd/yyyy ` | _define the format that want to return._ | 

### Example 

 ```javascript 
 var jsPackTools = require("js-packtools"); 
 let u = new jsPackTools(); 
 u.customDate('05/01/2019', 'yyyy-mm-dd', 15, false);  // => 2019-05-15 
 ```  

