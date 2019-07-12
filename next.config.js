console.log('process.env.NODE_ENV', process.env.NODE_ENV)

const { parsed: localEnv } = require('dotenv').config({
  path: `./env/${process.env.NODE_ENV}`,
})

console.log('localEnv', localEnv)

module.exports = {
  publicRuntimeConfig: {
    ...localEnv,
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.css$/,
      use: ['babel-loader', 'raw-loader', 'postcss-loader'],
    })

    return config
  },
  webpackDevMiddleware: config => config,
}
