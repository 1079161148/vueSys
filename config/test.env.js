'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  ENV_CONFIG: '"test"', //新增
  BASE_URL: '"http://www.test.com"', // test测试地址
})
