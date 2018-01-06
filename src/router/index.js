import Vue from 'vue'
import Router from 'vue-router'
import home from 'components/home/home'
import weather from 'components/weather/weather'
import fun from 'components/fun/fun'


Vue.use(Router)

export default new Router({
  linkActiveClass:'active',
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      component: home,
    },
    {
      path: '/weather',
      component: weather
    },
    {
      path: '/fun',
      component: fun
    }
  ]
})
