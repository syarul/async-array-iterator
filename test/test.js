var aai = require('../')

console.log('running test suite 1... \n')

var arrData = [1, 2, 3];

function iter(array, index, callback){
	
	var newVal = array[index] + 'add'

	callback(newVal)
}

function exec(res){
	console.log(res)
}

aai(arrData, iter, exec)



