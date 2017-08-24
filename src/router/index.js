import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [{
  path: '/demo1',
  component: () => import(/* webpackChunkName: "demo1" */'@/components/demo1')
}, {
  path: '/demo2',
  component: () => import(/* webpackChunkName: "demo2" */'@/components/demo2')
}]

Vue.use(VueRouter)

export default new VueRouter({ routes })
