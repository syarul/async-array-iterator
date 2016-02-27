# asyncArrayIterator
```for..loop``` is not that bad but in some cases you might want to resort to unconventional methods to process arrays, more than often it can lessen errors and leaks, and the best at cleaning up your code.

## installation

```npm i --save async-array-iterator```

## usage

```javascript
var asyncArrayIterator = require('async-array-iterator')

var arrData = [1, 2, 3];

function iterateArray(array, index, callback){
    
    var newVal = array[index] + 'add'

    callback(newVal)
}

function finalExec(res){
    console.log(res)
}

asyncArrayIterator(arrData, iterateArray, finalExec)  // [ '1add', '2add', '3add' ]
```
## Options Parameter
```javascript
asyncArrayIterator(array, iterator, exec, options)
```
- **array**: *(object)* array being process
- **iterator**: *(function)* function for iterating arrays, argumented with 'array', 'index' and pass a 'callback' method
- **exec**: *(function)* final function executed after all iterating is done
- **options**: *(object, optional)* you can pass attributes parameter if your arrays objects inherit prototype values.

## usage with options
```javascript
var asyncArrayIterator = require('async-array-iterator')

var arrData = [
    {name: 'john', age: 24},
    {name: 'sarah', age: 5},
    {name: 'mickey', age: 13}
];

function iterateArray(array, index, callback){
    
    var newName = array[index].name + ' travolta'
    var newAge = array[index].age + 0.5
    var data = [newName, newAge]
    callback(data)
}

function finalExec(res){
    console.log(res)
}

asyncArrayIterator(arrData, iterateArray, finalExec, {
    attributes: [ 'name', 'age']
}) // [ { name: 'john travolta', age: 24.5 }, { name: 'sarah travolta', age: 5.5 }, { name: 'mickey travolta', age: 13.5 } ] 

```