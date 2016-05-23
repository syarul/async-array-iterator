var aai = require('../')
var test = require('tape')

test('call object prototype function', function(t){
    t.plan(3)

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

    function iterator(array, index, cb) {
        var fullname = getName.fullname.call(array[index])
        cb(fullname)
    }

    function exec(res) {
        t.equal(res[0], 'John Ados')
        t.equal(res[1], 'Sarah Gabon')
        t.equal(res[2], 'Mickey Mouse')
    }

    aai(arrData, iterator, exec)

})