var aai = require('../')

console.log('\nrunning test suite 3... \n')

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
    console.log(res)
}

aai(arrData, iterator, exec)