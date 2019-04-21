import Vue from 'vue'
import Router from 'vue-router'

import Profile from '../components/Profile'
import Library from '../components/Library'
import Blocks from '../components/Blocks'
import BlockDetail from '../components/BlockDetail'
import Battle from '../components/Battle'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Profile',
      component: Profile
    },
    {
        path: '/lib',
        name: 'Library',
        component: Library
    },
    {
        path: '/blocks',
        name: 'Blocks',
        component: Blocks
    },
    {
        path: '/blockDetail',
        name: 'BlockDetail',
        component: BlockDetail
    },
    {
        path: '/battle',
        name: 'Battle',
        component: Battle
    }
  ]
})

export default router