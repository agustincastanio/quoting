const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

module.exports = {
  env: {
    SERVER: process.env.SERVER,
  },
};