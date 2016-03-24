var aai = require('../')

console.log('\nrunning test suite 2... \n')

var arrData = [
	{name: 'john', age: 24},
	{name: 'sarah', age: 5},
	{name: 'mickey', age: 13}
];

function iter(array, index, cb){
	
	var newName = array[index].name + ' travolta'
	var newAge = array[index].age + 0.5
	var data = [newName, newAge]
	cb(data)
}

function exec(res){
	console.log(res)
}

aai(arrData, iter, exec, {
	attributes: [ 'name', 'age']
})




