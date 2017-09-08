import Vue from 'vue'
import VueRouter from 'vue-router'

const routes = [{
  path: '/',
  component: () => import(/* webpackChunkName: "home" */'@/view/home')
}]

Vue.use(VueRouter)

export default new VueRouter({ routes })
