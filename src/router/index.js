import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Meetups from '@/components/Meetup/'
import Meetup from '@/components/Meetup/Show'
import CreateMeetup from '@/components/Meetup/Create'
import Profile from '@/components/User/Profile'
import Signup from '@/components/auth/SignUp'
import Signin from '@/components/Auth/SignIn'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: Meetups
    },
    {
      path: '/meetup/new',
      name: 'CreateMeetup',
      component: CreateMeetup
    },
    {
      path: '/meetups/:id',
      name: 'Meetup',
      component: Meetup
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/sign-up',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/sign-in',
      name: 'Signin',
      component: Signin
    }
  ],
  mode: 'history'
})
