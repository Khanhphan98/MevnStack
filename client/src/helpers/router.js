import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

Vue.use(Router)

export const router = new Router({
    mode: 'history',
    routes: [
        { path: '/login', component: Login },
        { path: '/register', component: Register },

        // redirect 
        { path: '*', redirect: '/' }
    ]
})

router.beforeEach((to, from, next) => {
    const publicPages   = ['/login', '/register']
    const authRequired  = !publicPages.includes(to.path)
    const loggedIn      = localStorage.getItem('token')

    if (authRequired && !loggedIn) {
        return next('/login')
    }
    next()
})