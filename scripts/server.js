const path = require('path')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const configPath = path.resolve(__dirname, '../', 'webpack.config.js')
const config = require(configPath)

const compiler = webpack(config)

const server = new WebpackDevServer(compiler)

compiler.hooks.done.tap('compilation', stats => {
  console.log(`webpack build success`)
})

server.listen(8080, null, () => {
  console.log(`webpack-dev-server started at localhost: 8080`)
})
