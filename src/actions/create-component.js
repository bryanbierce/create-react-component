// @flow
import fs from 'fs'
import path from 'path'
import stringCreators from '../lib/string-creators'

function createFile(filePath, isForce) {
  const dirname = path.dirname(filePath)
  const openFlags = isForce ? 'w' : 'wx'

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
  const file = createFile(filePath, options.force)
  const fileString = buildFileString(componentName, options.stateless)
  writeTo(file, fileString)
  closeFile(file)
}
