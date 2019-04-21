import Vue from 'vue'
import Router from 'vue-router'

import Profile from '../components/Profile'
import Library from '../components/Library'
import Blocks from '../components/Blocks'
import BlockDetail from '../components/BlockDetail'
import Battle from '../components/Battle'
import BattleInProgress from '../components/BattleInProgress'
import BattleStart from '../components/BattleStart'
import BattlePlay from '../components/BattlePlay'
import BattleResult from '../components/BattleResult'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Profile',
      meta: {
          part: 'Profile'
      },
      component: Profile
    },
    {
        path: '/lib',
        name: 'Library',
        meta: {
            part: 'Topic'
        },
        component: Library
    },
    {
        path: '/blocks',
        name: 'Blocks',
        meta: {
            part: 'Topic'
        },
        component: Blocks
    },
    {
        path: '/blockDetail',
        name: 'BlockDetail',
        meta: {
            part: 'Topic'
        },
        component: BlockDetail
    },
    {
        path: '/battle',
        name: 'Battle',
        meta: {
            part: 'Battle'
        },
        component: Battle
    },
    {
        path: '/getBattle',
        name: 'BattleInProgress',
        meta: {
            part: 'Battle'
        },
        component: BattleInProgress
    },
    {
        path: '/battleStart',
        name: 'BattleStart',
        meta: {
            part: 'Battle'
        },
        component: BattleStart
    },
    {
        path: '/battlePlay',
        name: 'BattlePlay',
        meta: {
            part: 'Battle'
        },
        component: BattlePlay
    },
    {
        path: '/battleResult',
        name: 'BattleResult',
        meta: {
            part: 'Battle'
        },
        component: BattleResult
    }
  ]
})

export default router