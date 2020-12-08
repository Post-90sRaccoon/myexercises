function compact(array) {
  let length = array == null ? 0 : array.length
  let index = -1, resIndex = 0
  let result = []
  while (++index < length) {
    let value = array[index]
    if (value) {
      result[resIndex++] = value
    }
  }
  return result
}
