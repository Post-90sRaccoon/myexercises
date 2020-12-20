/**
 * Creates a function that performs a partial deep comparison between a given object and source, returning true if the given object has equivalent property values, else false.
 *
 * @param {Object} source
 */
function matches(source) {
  return function (obj) {
    for (let key in source) {
      if (source[key] !== obj[key]) {
        return false
      }
    }
    return true
  }
}
