<template>
    <div>
        <ul v-for="(car, index) in cars" :key="index">
            <li>
                <span style="font-weight:bold;" class="list-group-item list-group-item-info">
                    <router-link :to="singleCar(car)">{{ car.brand }} </router-link>
                    {{ car.model }}
                </span>
                <router-link :to="editCar(car)" style="background-color:#CD5C5C; color:white; padding:0.3rem; border-radius:0.3rem;" >Edit car</router-link>  
            </li>
        </ul>
    </div>
</template>

<script>
import { carsService } from '../services/CarsService'

export default {
    data(){
        return {

            cars:[],

            errors:[],

            car: {
                id:'', 
                brand:'', 
                model:'',
                year:'', 
                maxSpeed:'', 
                isAutomatic:'', 
                engine:'', 
                numberOfDoors:''
            },

        }
    },

    created() {
        carsService.getAll()
        .then(response => {
            this.cars = response.data
        })
        .catch(e => {
            console.log(e)
        })
    },

    methods: {
        editCar(car){
            return `/edit/${car.id}`
        },

        singleCar (car) {
            return `/cars/${car.id}`
        },

    }


}
</script>

