// @flow
var fs = require('fs')
var path = require('path')
var stringCreators = require('../lib/string-creators')

function createFile(filePath, isForce) {
  var dirname = path.dirname(filePath)
  var openFlags = isForce ? 'w' : 'wx'

  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname)
  }

  return fs.openSync(filePath, openFlags)
}

function buildFileString(componentName, isStateless) {
  return stringCreators.createFileString(
    stringCreators.createImports(),
    stringCreators.createComponent(componentName, isStateless),
    stringCreators.createExports(componentName)
  )
}

function writeTo(file, fileString) {
  fs.writeSync(file, fileString)
}

function closeFile(file) {
  fs.closeSync(file)
}

module.exports = function createComponent(componentName, filePath, options) {
  var file = createFile(filePath, options.force)
  var fileString = buildFileString(componentName, options.stateless)
  writeTo(file, fileString)
  closeFile(file)
}
