// @flow
const init = 'class ';
const statelessInit = 'const ';

const body = ' extends React.Component {\n  render() {\n    return (\n      <div>\n      </div>\n    );\n  }\n}';
const statelessBody = ' = () => (\n  <div>\n  </div>\n);';

export default {init: init, statelessInit: statelessInit, body: body, statelessBody: statelessBody}
