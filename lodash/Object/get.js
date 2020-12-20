function get(object, path, defaultValue) {
  let result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}


function baseGet(object, path) {
  path = castPath(path, object);

  let index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}
