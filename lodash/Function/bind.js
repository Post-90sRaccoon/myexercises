/**
 * Creates a function that invokes func with the this binding of thisArg and partials prepended to the arguments it receives.
 *
 * @param {Function} f
 * @param  {...any} fixedArgs
 */
function bind(f, ...fixedArgs) {
  return function (...args) {
    let newArgs = fixedArgs.slice()
    let index = 0
    for (let i = 0; i < newArgs.length; i++) {
      if (newArgs[i] == null) {
        newArgs[i] = args[index++]
      }
    }
    if (index < args.length) {
      newArgs.push(args[index++])
    }
    return f.apply(this, newArgs)
  }
}

// lodash add 可以绑定任意位置的参数 不一定要开头
//测试
// function add(...args) {
//   console.log(arguments)
// }

// let a = bind(add, 1, null, 3, null, 5)
// a(2, 4, 6, 7, 8)


