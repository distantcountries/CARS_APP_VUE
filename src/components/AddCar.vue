<template>  <!--zadatak 3 -->
    <div>
        <router-view />

        <form @submit.prevent="addCar">
            <div style="width:50%; margin: 0 auto;">
                <div class="form-group">
                    <label for="brand">Brand:</label>
                    <input type="text" id="brand" v-model="newCar.brand" class="form-control" required />
                </div>
                <div class="form-group">
                    <label for="model">Model:</label>
                    <input type="text" id="model" v-model="newCar.model" class="form-control" />
                </div>
                <div class="form-group">
                    <label for="year">Year:</label>
                    <select v-model="newCar.year">
                        <option v-for="(year, index) in years" :key="index">
                            {{ year }}
                        </option>
                    </select>
                    <input type="text" id="brand" v-model="newCar.year" class="form-control" />
                </div>
                <div class="form-group">
                    <label for="maxSpeed">Max Speed:</label>
                    <input type="number" id="maxSpeed" v-model="newCar.maxSpeed" class="form-control" />
                </div>
                <div class="form-group">
                    <label for="numberOfDoors">Number Of Doors:</label>
                    <input type="number" id="numberOfDoors" v-model="newCar.numberOfDoors" class="form-control" />
                </div>
                <div class="form-check">
                    <input type="checkbox" id="isAutomatic" v-model="newCar.isAutomatic" class="form-check-input" />
                    <label for="isAutomatic">Is Automatic:</label>
                </div>
                <br>
                <div class="form-check">
                    <label>Engine:</label><br>

                    <label for="engine" class="radio-inline" style="margin-right:1rem;">
                        <input type="radio" id="engine" v-model="newCar.engine" value="diesel" />
                    Diesel </label>

                    <label for="engine" class="radio-inline" style="margin-right:1rem;">
                        <input type="radio" id="engine" v-model="newCar.engine" value="petrol" />
                    Petrol </label>

                    <label for="engine" class="radio-inline" style="margin-right:1rem;">
                        <input type="radio" id="engine" v-model="newCar.engine" value="electric" />
                    Electric</label>

                    <label for="engine" class="radio-inline" style="margin-right:1rem;">
                        <input type="radio" id="engine" v-model="newCar.engine" value="hybrid" />
                    Hybrid</label>
                </div>
                    <button type="submit">Submit car</button>
                    <button type="reset" @click="editCar">Submit edited car</button>
                    <button type="button" @click="resetForm">Reset form</button>
                    <button type="button" v-if="editable" @click="previewForm">Preview form</button>
            </div>
        </form>

    </div>
</template>

<script>
import { carsService } from '../services/CarsService'

export default {
    data(){
        return {
            years: Array(42).fill(1978).map((n, i) => n + i),
            editable: false,      

            newCar: {
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

    methods: {

         getDefaults () {
            return {
                brand: "",
                model: "",
                year: null,
                maxSpeed: null,
                isAutomatic: false,
                engine: "",
                numberOfDoors: null
            }
        },

        addCar() { //zadatak 3
         carsService.addCar(this.newCar)
                .then( response => {
                    this.newCar = this.getDefaults();
                    this.$router.push('/cars')
                }).catch(error => {
                    alert('Error with adding car!');
                });


        },

        resetForm() {
            this.newCar = {
                brand:'', 
                model:'',
                year:'', 
                maxSpeed:'', 
                isAutomatic:'', 
                engine:'', 
                numberOfDoors:''
            }
        },

        previewForm(){
            alert(JSON.stringify(this.newCar, null, 4))
        },

        editCar(newCar){
            carsService.edit(this.$route.params.id, this.newCar);
        },

        getCar(id){
            carsService.getCar(id)
                .then(response => {
                    this.newCar = response.data
                    console.log('Getting car!')
                }).catch(e=>{
                    console.log(e)
            })
        },

    },

    created(){
       this.id = this.$router.currentRoute.params.id;
       if (this.id){
           this.getCar(this.id)
       }
    }

}
</script>

<style>

</style>
