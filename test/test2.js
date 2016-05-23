var aai = require('../')
var test = require('tape')
test('object with properties', function(t){
	t.plan(2)
	
	var arrData = [
		{name: 'john', age: 24},
		{name: 'sarah', age: 5},
		{name: 'mickey', age: 13}
	];

	function iter(array, index, cb){
		
		var newName = array[index].name + ' travolta'
		var newAge = array[index].age + 1
		var data = [newName, newAge]
		cb(data)
	}

	function exec(res){
		t.equal(res[2].name, 'mickey travolta')
		t.equal(res[2].age, 14)
	}

	aai(arrData, iter, exec, {
		attributes: [ 'name', 'age']
	})
})




