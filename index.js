// @flow
var program = require('commander')
var _ = require('./lib/lodash.custom.min.js')
var createComponent = require('./src/actions/create-component')

program
  .version('0.0.1')
  .arguments('<ComponentName> <filePath>')
  .option('-s, --stateless', 'Creates a stateless component')
  .option('-f, --force', 'Force, will overwrite existing files with name conflicts')
  .action(function crcActionHandler(componentName, filePath) {
    var options = _.pick(program, ['stateless', 'force'])
    componentName = _.upperFirst(componentName)
    createComponent(componentName, filePath, options)
  })

program.parse(process.argv)
