import Vue from 'vue'
import VueRouter from 'vue-router'
import AppCars from './components/AppCars'
import AddCar from './components/AddCar' //zadatak 3
import Login from './components/Login' //zadatak 5
import Register from './components/Register' //zadatak 8
import SingleCar from './components/SingleCar' //zadatak 9
import { authService } from './services/Auth'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/cars'
    },
    {
        path: '/cars',
        component: AppCars
    },
    {
        path: '/add',
        component: AddCar
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/edit/:id',
        component: AddCar
    },
    {
        path: '/cars/:id',
        component: SingleCar
    },

]

export const router = new VueRouter({
    routes,
    mode: 'history'
})

// router.beforeEach((to, from, next) => {
//     if (to.name !== 'login' && to.name !== 'register' && !authService.isAuthenticated()) {
//         return router.push({ name: 'login' });
//     }

//     if ((to.name === 'login' || to.name === 'register') && authService.isAuthenticated()) {
//         return router.push({ name: from.name });
//     }

//     next()
// })