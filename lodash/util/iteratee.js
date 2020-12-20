/**
 * Creates a function that invokes func with the arguments of the created function. If func is a property name, the created function returns the property value for a given element. If func is an array or object, the created function returns true for elements that contain the equivalent source properties, otherwise it returns false.
 *
 * @param {*} func
 */
function iteratee(func) {
  if (typeof func === 'string') {
    func = property(func)
  } else if (Array.isArray(func)) {
    func = matchesProperty(func)
  } else if (typeof func === 'object') {
    func = matches(func)
  }
  return func
}

// function get(obj, prop) {
//   return obj[prop]
// }
// function property2(path){
//   get.bind(null, _, path)
// }

function property(path) {
  return function (obj) {
    return obj[path]
  }
}

function matches(source) {
  return function (obj) {
    for (let key in source) {
      if (source[key] !== obj[key]) {
        return false
      }
    }
    return true
  }
}

function matchesProperty(ary) {
  return matches(fromPairs(chunk(ary, 2)))
}

function fromPairs(ary) {
  let result = {}
  let length = ary == null ? 0 : ary.length
  let index = -1
  while (++index < length) {
    let pair = ary[index]
    result[pair[0]] = pair[1]
  }
  return result
}


function chunk(ary, size = 1) {
  let length = ary == null ? 0 : ary.length
  if (!length || size < 1) {
    return []
  }
  let index = 0, resIndex = 0
  let result = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = ary.slice(index, index += size)
  }
  return result
}
