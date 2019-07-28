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
        redirect: '/cars',
        name: 'carsDefault'
    },
    {
        path: '/cars',
        component: AppCars,
        name: 'cars',
    },
    {
        path: '/add',
        component: AddCar,
        name: 'add-car'
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/register',
        component: Register,
        name: 'register'
    },
    {
        path: '/cars/:id',
        component: SingleCar,
        name: 'single-car'
    },
    {
        path: '/edit/:id',
        component: AddCar,
        name: 'edit-car'
    },


]

export const router = new VueRouter({
    routes,
    mode: 'history'
})

//zadatak 10
//obavezno gore dodati name za rute
router.beforeEach((to, from, next) => {
    if (to.name !== 'login' && to.name !== 'register' && !authService.isAuthenticated()) {
        return router.push({ name: 'login' });
    }

    if ((to.name === 'login' || to.name === 'register') && authService.isAuthenticated()) {
        return router.push({ name: from.name });
    }

    next()
})