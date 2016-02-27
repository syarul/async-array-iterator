var asyncArrayIterator = require('../')

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
})




