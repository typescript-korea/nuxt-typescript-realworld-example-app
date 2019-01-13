const getFileNameRegex = /[^\\/]+\.[^\\/]+$/

function removeExt(file) {
  return file.replace(/\.(\w*)$/, '')
}

export default function getFileName(path, ext = false) {
  const [file = null] = path.match(getFileNameRegex) || []
  const name = file || path
  return ext ? name : removeExt(name)
}
