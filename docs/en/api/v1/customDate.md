## customDate 
  ```javascript
 customDate(_date, _format, _addDay, _type) ⇒ string|Object 
``` 

 ` Version: 1.0.0 ` 
` Category: ⏰ Time/Date ` 

### Description 

?> It's a date control. Without parameters give the current date, use the parameters to customize its functionality. 

### Implementation 

| Param | Type | Default value | Description | 
| --- | --- | --- | --- | 
| **_date** | `string` | ` new Date() ` | _date or Object Date by Default is current date._ | 
| **_format** | `string` | ` mm/dd/yyyy ` | _define the format that want to return._ | 
| **_addDay** | `int` | ` 0 ` | _count of days that add to date o current date_ | 
| **_type** | `boolean` | ` false ` | _method to return  or {Object Date}_ | 

### Example 

 ```javascript 
 var jsPackTools = require("js-packtools"); 
 let u = new jsPackTools(); 
 u.customDate('05/01/2019', 'yyyy-mm-dd', 15, false);  // => 2019-05-15 
 ```  

