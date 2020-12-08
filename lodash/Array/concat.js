function concat(array, ...args) {
  let ary
  if (array == null) {
    ary = []
  } else {
    ary = array.slice()
  }
  let start = ary.length
  let length = args == null ? 0 : args.length
  let index = -1
  while (++index < length) {
    let values = args[index]
    if (Array.isArray(values)) {
      let length = values.length
      let index = -1
      while (++index < length) {
        ary[start++] = values[index]
      }
    } else {
      ary[start++] = values
    }
  }
  return ary
}


