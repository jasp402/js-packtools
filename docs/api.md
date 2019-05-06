# API Docs


## customDate 

```javascript
customDate(date, format, addDay, type);
```
?> It's a date control. Without parameters give the current date, use the parameters to customize its functionality. 

`Available since | 0.1.0`


---

| Argument |         Type         | Description                                     | Required |
|---------:|:--------------------:|-------------------------------------------------|:--------:|
|     date | string / Object Date | This is date o time to convert format                |    NO    |
|   format | string               | this is format that you want return [Review Details]()          |    NO    |
|   addDay | number               | Is number of de day that want increment         |    NO    |
|     type | boolean              | Default: false, return string. else Object Date |    NO    |

[runkit website](https://jasp402.github.io/js-packtools/examples/customDate.html ':include :type=iframe width=100%')


## differenceDay

```javascript
differenceDay(_startDate, _endDate);
```
?> Return the number of days between 2 dates.

`Available since | 0.1.0`

---

|  Argument 	|   Type  	| Description 	| Required 	|
|----------:	|:-------:	|-------------	|:--------:	|
| startDate 	| string  	| Start date  	|    YES      	|
|   endDate 	| string  	| End Date    	|    YES    	|




##stringToDateTime
##validateYear
##clearFolder
##groupBy
##endDate
##saveProgressData
##deleteScriptClone
##log
##logError
##logExecution
##getCookies
##waitForExistPDF
##csvToJson