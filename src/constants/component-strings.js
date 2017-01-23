var init = 'class '
var statelessInit = 'const '

var body = ' extends React.Component {\n  render() {\n    return (\n      <div>\n      </div>\n    );\n  }\n}'
var statelessBody = ' = () => (\n  <div>\n  </div>\n);'

module.exports = {
  init: init,
  statelessInit: statelessInit,
  body: body,
  statelessBody: statelessBody
}
