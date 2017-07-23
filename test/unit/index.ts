import 'babel-polyfill'
import Vue from 'vue'

// disable print Vue production tip
Vue.config.productionTip = false

const testsContext = require.context('./', true, /\.spec\.ts(x?)$/)
testsContext.keys().forEach(testsContext)
