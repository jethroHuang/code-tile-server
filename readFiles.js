const fs = require('fs')
const path = require('path')

module.exports = function readFiles(rootPath) {
  const result = []

  function read(result, _path) {
    const res = fs.readdirSync(_path)
    const dirList = []
    const fileList = []
    res.forEach(function (filePath) {
      if (filePath.indexOf('.') === 0) {
        return
      }
      const joinPath = path.join(_path, filePath)
      let stat = fs.statSync(joinPath)
      const fileObj = {
        'name': filePath,
        'path': joinPath.replace(/\\/g, '/')
      }
      if (stat.isFile()) {
        fileObj['type'] = 'file'
        fileObj['fileType'] = path.extname(filePath)
        fileList.push(fileObj)
      } else {
        fileObj['type'] = 'dir'
        fileObj['children'] = []
        read(fileObj.children, joinPath)
        dirList.push(fileObj)
      }
    })
    // 文件夹排序在前面
    dirList.concat(fileList).forEach(e => result.push(e))
  }

  read(result, rootPath)
  return result
}
