/**
 *
 * Creates a function that provides value to wrapper as its first argument. Any additional arguments provided to the function are appended to those provided to the wrapper. The wrapper is invoked with the this binding of the created function.
 *
 * @param {*} value
 * @param {Function} wrapper
 */
function wrap(value, wrapper) {
  return function (...args) {
    return wrapper.bind(this, value)(args)
  }
}
