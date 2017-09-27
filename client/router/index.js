import Vue from 'vue'
import Router from 'vue-router'
import Editor from '../views/Editor'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Editor
    }
  ]
})
