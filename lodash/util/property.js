/**
 * Creates a function that returns the value at path of a given object.
 *
 * @param {String} path
 */
function property(path) {
  return function (obj) {
    return obj[path]
  }
}
