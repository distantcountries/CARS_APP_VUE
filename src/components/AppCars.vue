<template>
    <div>
        <ul v-for="(car, index) in cars" :key="index">
            <li>
                <span style="font-weight:bold;" class="list-group-item list-group-item-info">
                    <router-link :to="singleCar(car.id)">{{ car.brand }} </router-link>
                    {{ car.model }}
                </span>
                <button type="button" @click="editCar(car.id)">Edit</button>
                <button type="button" @click="deleteCar(car.id)">Delete</button>
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
        .catch(e => {
            console.log('Response data caras invalid!')
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
                .then(() => {this.$router.go();
                })
                .catch(e => {
                    console.log('Delete car invalid!')
                })
        },

    }


}
</script>

