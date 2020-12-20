/**
 * Creates a function that accepts arguments of func and either invokes func returning its result, if at least arity number of arguments have been provided, or returns a function that accepts the remaining func arguments, and so on. The arity of func may be specified if func.length is not sufficient.
 *
 * @param {Function} func
 * @param {Number} arity
 */
function curry(func, arity = func.length) {
  return function (...args) {
    if (args.length === arity) {
      return func(...args)
    } else {
      return curry(func.bind(null, ...args), arity - args.length)
    }
  }
}
// 参数没传够 返回一个函数接收剩余参数 够了返回结果

// var abc = function (a, b, c) {
//   return [a, b, c];
// };

// var curried = curry(abc);
// console.log(curried(1)(2)(3))
// console.log(curried(1, 2)(3))
// console.log(curried(1, 2, 3))

