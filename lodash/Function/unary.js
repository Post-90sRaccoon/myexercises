/**
 * Creates a function that accepts up to one
  argument, ignoring any additional arguments.
 *
 * @param {Function} func
 */
function unary(func) {
  // return ary(func,1)
  return function (arg) {
    return func(arg)
  }
}

['1', '2', '3'].map(unary(parseInt))
