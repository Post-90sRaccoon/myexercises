/**
 * Creates a function that invokes func, with up to n arguments, ignoring any additional arguments.
 *
 * @param {Function} func
 * @param {Number} n
 */
function ary(func, n = func.length) {
  return function (...args) {
    return func(...args.slice(0, n))
  }
}
