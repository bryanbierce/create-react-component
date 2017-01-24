// @flow
import program from 'commander'
import {pick, upperFirst} from 'lodash/core'
import createComponent from './actions/create-component'


program
  .version('0.0.1')
  .arguments('<ComponentName> <filePath>')
  .option('-s, --stateless', 'Creates a stateless component')
  .option('-f, --force', 'Force, will overwrite existing files with name conflicts')
  .action(function crcActionHandler(componentName, filePath) {
    const options = pick(program, ['stateless', 'force'])
    componentName = upperFirst(componentName)
    createComponent(componentName, filePath, options)
  })

program.parse(process.argv)
