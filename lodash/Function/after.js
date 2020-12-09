/**
 * The opposite of _.before; this method
 * creates a function that invokes func once
 * it's called n or more times.
 * @param {*} n
 * @param {*} func
 */
function after(n, func) {
  let count = 0
  return function () {
    if (++count >= n) {
      return func.apply(this, arguments)
    }
  }
}
