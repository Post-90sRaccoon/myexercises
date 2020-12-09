/**
 * Creates a function that negates the result of the predicate func. The func predicate is invoked with the this binding and arguments of the created function.
 *
 * @param {Function} predicate
 */

function negate(predicate) {
  return function () {
    return !(predicate.apply(this, arguments))
  }
}

