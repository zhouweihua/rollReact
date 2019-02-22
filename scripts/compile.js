
const path = require('path')
const fs = require('fs-extra')
const root = path.join(__dirname, '..')
const configPath = path.join(root, `webpack.config`)


const Promise = require('bluebird')
Promise.promisifyAll(fs)


console.log('start compiling...')

const webpack = require('webpack')
const config = require(configPath)
const buildPath = path.join(root, `dist`)

Promise.resolve()
    .then(() => {
        console.log('clean build path')
        return Promise.all([fs.removeAsync(buildPath)])
    })
    .then(() => {
        console.log('webpack building...')

        // webpack 编译
        return new Promise((resolve, reject) => {
            webpack(config, (err, stats) => {
            if (err || stats.hasErrors()) {
                console.log(stats.toString({
                colors: true,
                timings: true,
                hash: true,
                version: true,
                errorDetails: true,
                assets: false,
                chunks: false,
                children: false,
                modules: false,
                chunkModules: false
                }))

                return reject(err)
            }

            const time = (stats.endTime - stats.startTime) / 1000

            console.log(`webpack build success in ${time.toFixed(2)} s`)

            resolve()
            })
        })
    })

