/**
 * The inverse of _.toPairs; this method returns an object composed from key-value pairs.
 *
 * @param {Array} ary
 */

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

// [1,2,3,4]
// chunk
// [[1,2],[3,4]]
// fromPairs
// {1:2,3:4}
// console.log(fromPairs(chunk(['a', 1, 'b', 2], 2)))

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
