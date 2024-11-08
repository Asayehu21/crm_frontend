import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'


import HomeView from '../views/HomeView.vue'
import SignUp from '../views/SignUp.vue'
import LogIn from '../views/LogIn.vue'
import DashBoard from '@/views/dashboard/DashBoard.vue'
import MyAccount from '../views/dashboard/MyAccount.vue'
import Leads from '../views/dashboard/Leads.vue'
import AddLead from '../views/dashboard/AddLead.vue'
import Lead from '../views/dashboard/Lead.vue'
import EditLead from '../views/dashboard/EditLead.vue'
import AddTeam from '../views/dashboard/AddTeam.vue'
import Team from '../views/dashboard/Team.vue'


const routes = [

  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
   {
    path: '/log-in',
    name: 'LogIn',
    component: LogIn
  },

  {
    path: '/dashboard',
    name: 'DashBoard',
    component: DashBoard,
    meta: {
      requireLogin: true
    }
  },
    {
    path: '/dashboard/my-account',
    name: 'MyAccount',
    component: MyAccount,
    meta: {
      requireLogin: true
    }
  },
   {
    path: '/dashboard/add-team',
    name: 'AddTeam',
    component: AddTeam,
    meta: {
      requireLogin: true
    }
  },
     {
    path: '/dashboard/team',
    name: 'Team',
    component: Team,
    meta: {
      requireLogin: true
    }
  },
  {
    path: '/dashboard/leads',
    name: 'Leads',
    component: Leads
  
  },
    {
    path: '/dashboard/leads/add-lead',
    name: 'AddLead',
    component: AddLead
  },
      {
    path: '/dashboard/leads/:id',
    name: 'Lead',
        component: Lead,
        meta: {
      requireLogin: true
    }
  },
     {
    path: '/dashboard/leads/:id/edit',
    name: 'EditLead',
        component: EditLead,
        meta: {
      requireLogin: true
    }
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
    next('/log-in')
  } else {
    next()
  }
})

export default router
