var componentStrings = require('../constants/component-strings')

exports.createImports = function() {
  return 'import React from \'react\';\n\n'
}

exports.createComponent = function(componentName, isStateless) {
  var init = componentStrings[(isStateless ? 'statelessInit' : 'init')]
  var body = componentStrings[(isStateless ? 'statelessBody' : 'body')]
  return init + componentName + body + '\n\n'
}

exports.createExports = function(componentName) {
  return 'export default ' + componentName + ';\n'
}

exports.createFileString = function(imports, component, _exports) {
  return (
    imports + component + _exports
  )
}
