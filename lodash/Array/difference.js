function before(n, func) {
  let count = 0
  let result
  return function (...args) {
    if (count < n) {
      count++
      result = func(...args)
    } else {
      return result
    }
  }
}
