function filter(collection, predicate) {
  let result = []
  predicate = iteratee(predicate)
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      let value = collection[i]
      if (predicate(value, i, collection)) {
        result.push(value)
      }
    }
  } else {
    for (let key in collection) {
      let value = collection[key]
      if (predicate(value, key, collection)) {
        result.push(value)
      }
    }
  }
  return result
}

let users = [
  { 'user': 'barney', 'age': 36, 'active': true },
  { 'user': 'fred', 'age': 40, 'active': false }
]

console.log(filter(users, function (o) { return !o.active; }))
console.log(filter(users, { 'age': 36, 'active': true }))
console.log(filter(users, ['active', false]))
console.log(filter(users, 'active'))

let users1 = {
  a: { 'user': 'barney', 'age': 36, 'active': true },
  b: { 'user': 'fred', 'age': 40, 'active': false }
}

console.log(filter(users1, function (o) { return !o.active; }))
console.log(filter(users1, { 'age': 36, 'active': true }))
console.log(filter(users1, ['active', false]))
console.log(filter(users1, 'active'))


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
