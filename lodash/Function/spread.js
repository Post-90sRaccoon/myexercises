/**
 * Creates a function that invokes func with the this binding of the create function and an array of arguments much like Function#apply
 *
 * @param {Function} func
 */
function spread(func) {
  return function (args) {
    return func.apply(this, args)
  }
}

// parseInt('2', 8)
// parseInt8 = spread(parseInt)
// parseInt8(['2', 8])
