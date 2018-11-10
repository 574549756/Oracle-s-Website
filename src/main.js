// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue"
import VueResource from "vue-resource"
import VueRouter from "vue-router"
import App from "./App"
import router from "./router"
import "normalize.css"

import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.config.productionTip = false
import echarts from "echarts"
Vue.prototype.$echarts = echarts

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
})
