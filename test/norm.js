var arrData = [1, 2, 3];
newArr = []

function test() {
    for (var i = 0; i < arrData.length; i++) {
        newArr.push(arrData[i] + ' add')
        if (i == arrData.length - 1)
            return newArr
    }
}
var a = test()
console.log(a)