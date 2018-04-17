import Vue from 'vue'
import Router from 'vue-router'
import SetPage from '@/components/SetPage'
import TodoList from '@/components/TodoList'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList
    },
    {
      path: '/:id',
      name: 'SetPage',
      component: SetPage
    }
  ]
})
