'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API_URL:'"http://140.122.82.98/api"',
  PROTOCOL: '"https"'
})
