var asyncArrayIterator = require('../')

var arrData = [1, 2, 3];

function iterateArray(array, index, callback){
	
	var newVal = array[index] + 'add'

	callback(newVal)
}

function finalExec(res){
	console.log(res)
}

asyncArrayIterator(arrData, iterateArray, finalExec)



