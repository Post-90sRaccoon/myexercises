/**
 * Creates a function that invokes func with arguments reversed.
 *
 * @param {Function} func
 */

function flip(func) {
  return function (...args) {
    return func(...args.reverse())
  }
}


