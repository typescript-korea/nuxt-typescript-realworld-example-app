const getPathRegex = /[^(/|.)](\w|\.|-)*\//
export default function getPath(path) {
  const [filePath = ''] = path.match(getPathRegex) || []
  return filePath
}
