# asyncArrayIterator
A replacement for for..loop statement and clean up your code from such + passing asynchronous result from the iteration. Usually we pass a statement inside the loop. It might be ok for small operation and start to become clunky when the array contains value which inherits lots of prototypes with method. Since for loop is synchronous, it's bad implementation for server side Node.js when you need to process async function inside it. asyncArrayIterator iterator pass a callback during iteration which will wait for all async function completion before moving to next iteration. 

## installation

```npm i --save async-array-iterator```

## usage

```javascript
var aai = require('async-array-iterator')

var arrData = [1, 2, 3];

function iterator(array, index, cb){
  
  var newVal = array[index] + 'add'

  cb(newVal)
}

function exec(res){
  console.log(res)
}

aai(arrData, iterator, exec) // [ '1add', '2add', '3add' ]
```
## Options Parameter
```javascript
asyncArrayIterator(array, iterator, exec, options)
```
- **array**: *(object)* array being process
- **iterator**: *(function)* function for iterating arrays, augmented with 'array', 'index' and pass a 'callback' method
- **exec**: *(function)* final function executed after all iterating is done
- **options**: *(object, optional)* you can pass attributes parameter if your arrays objects inherit prototype values.

## usage with options
```javascript
var aai = require('async-array-iterator')

var arrData = [
    {name: 'john', age: 24},
    {name: 'sarah', age: 5},
    {name: 'mickey', age: 13}
];

function iterator(array, index, cb){
    
    var newName = array[index].name + ' travolta'
    var newAge = array[index].age + 0.5
    var data = [newName, newAge]
    cb(data)
}

function exec(res){
    console.log(res)
}

aai(arrData, iterator, exec, {
    attributes: [ 'name', 'age']
}) // [ { name: 'john travolta', age: 24.5 }, 
   //   { name: 'sarah travolta', age: 5.5 }, 
   //   { name: 'mickey travolta', age: 13.5 } ] 

```

## sample with using call()
```javascript
var aai = require('async-array-iterator')

var getName = {
    first: null,
    last: null,
    fullname: function() {
        return this.first + ' ' + this.last
    }
}

var arrData = [{
    first: 'John',
    last: 'Ados'
}, {
    first: 'Sarah',
    last: 'Gabon'
}, {
    first: 'Mickey',
    last: 'Mouse'
}];

function iter(array, index, cb) {
    var fullname = getName.fullname.call(array[index])
    cb(fullname)
}

function exec(res) {
    console.log(res)
}

aai(arrData, iter, exec) // [ 'John Ados', 'Sarah Gabon', 'Mickey Mouse' ]
```