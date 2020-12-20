function matchesProperty(ary) {
  return matches(fromPairs(chunk(ary, 2)))
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
