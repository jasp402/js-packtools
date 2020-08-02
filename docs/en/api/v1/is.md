## is 
  ```javascript
 is(type, value) ⇒ boolean 
``` 

 ` Version: 1.0.1 ` 
` Category: ✔ validate ` 

### Description 

?> Is a function for evaluate to type of element 

### Implementation 

| Param | Type | Default value | Description | 
| --- | --- | --- | --- | 
| **type** | `string` | ` array/object/number/string/boolean ` | _Define type of element that want evaluate._ | 
| **value** | `any` | ` ` | _Element to evaluate._ | 

### Example 

 ```javascript 
 const {is} = require("js-packtools");
is('array', [1]); //true 
is('object', [1]); //false 
 ```  

