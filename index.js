var program = require('commander')

program
  .version('0.0.1')
  .arguments('<ComponentName> <file>')
  .option('-s, --stateless', 'Declares a the component to be functional (stateless)')
  .option('-f, --foce', 'Create directories if needed')
  .action((componentName, file) => {
    console.log(componentName, file)
  })

program.parse(process.argv)