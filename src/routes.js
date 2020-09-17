// default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// Pages
import Home from '@/pages/Home'
import NotFound from '@/pages/404'
import Users from '@/pages/Users'

// Routering
export default new Router({
    // mode: 'history', //контроль ставить ли хэш или нет
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '*',
            name: 'notFound',
            component: NotFound
        },
        {
            path: '/Users',
            name: 'Users',
            component: Users
        },
    ]
})