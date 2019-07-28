<template>
    <div>
        <ul v-for="(car, index) in cars" :key="index">
            <li>
                <span style="font-weight:bold;" class="list-group-item list-group-item-info">
                    <router-link :to="singleCar(car.id)">{{ car.brand }} </router-link>
                    {{ car.model }}
                </span>
                <button type="button" @click="editCar(car.id)">Edit</button>
                <button type="button" @click="deleteCar(car.id)">Delete car</button>
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
        }
    },

    created() {
        carsService.getAll()
        .then(response => {
            this.cars = response.data
        })
        .catch(() => {
            console.log('Response data cars invalid!')
        })
    },

    methods: {
        editCar(id) {
            carsService.get(id)
            .then(() => {
                this.$router.push("edit/" + id);
            })
        },
        singleCar(id) {
            return "/cars/" + id;
        },  

         deleteCar(id) {
            carsService.delete(id)
            .then(() => {
                this.cars = this.cars.filter(car => car.id !== id) //this.car= da bismo modifikovali niz, u suprotnom bi ga smao filtrirao
                console.log('Car is deleted')
            })
            .catch(() => {
                alert('Error with getting cars')
            })
        }, 

    }


}
</script>

