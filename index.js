/**
 * asyncArrayIterator a simple asyncronous iterator which can simplify processing arrays before assigning final arguments
 * 
 */

module.exports = asyncArrayIterator

function asyncArrayIterator(array, callback, exec, options) {

  var index = 0,
      newDataArray = [],
      cell = {}

  options = options || {};

  function cellOperation(result) {
    if ( options.attributes) {

      if ( typeof options.attributes !== 'object' || options.attributes.length === 0) {
          throw new Error('Valid parameter have to be provided')
      }

      options.attributes.forEach(function(element, index, array) {
        cell[element] = result[index]
      })
      newDataArray.push(cell)
      cell = {}
    } else {
      newDataArray.push(result)
    }
  }

  function next() {
    if (index < array.length) {
      callback(array, index, cellOperation)
      index++
      next()
    } else {
      exec(newDataArray)
    }
  }
  next()
}