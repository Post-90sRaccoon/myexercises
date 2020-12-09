/**  Creates a function that invokes func, with the this binding and arguments of the created function, while it's called less than n times. Subsequent calls to the created function return the result of the last func invocation.
*/
function before(n, func) {
  let count = 0
  let result
  return function () {
    if (count <= n) {
      count++
      result = func.apply(this, arguments)
    }
    return result
  }
}
