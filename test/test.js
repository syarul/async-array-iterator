var aai = require('../')
var test = require('tape')

test('simple array operation', function(t) {
  t.plan(3)

  var arrData = [1, 2, 3];

  function iter(array, index, callback) {

    var newVal = array[index] * 2

    callback(newVal)
  }

  function exec(res) {
    t.equal(res[0], 2)
    t.equal(res[1], 4)
    t.equal(res[2], 6)
  }

  aai(arrData, iter, exec)

})
