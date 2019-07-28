<template>  <!--zadatak 3 -->
    <div>
        <!-- <router-view /> -->

        <form @submit.prevent="addCar(newCar)">
            <input type="text" placeholder="Brand..." class="form-control" v-model="newCar.brand" pattern=".{2,}" title="2 characters minimum" required />
            <input type="text" placeholder="Model..." class="form-control" v-model="newCar.model" pattern=".{2,}" title="2 characters minimum" required />
            <input type="number" placeholder="Max speed..." class="form-control" v-model="newCar.maxSpeed" />
            <input type="number" placeholder="Number of doors..." class="form-control" v-model="newCar.numberOfDoors" required/>
            <div class="form-control">
                Year: 
                <select v-model="newCar.year" required >
                    <option v-for="(year, index) in yearsArray" :key="index" >
                        {{ year }}
                    </option>
                </select>
                Is automatic: 
                <input type="checkbox"  v-model="newCar.isAutomatic"/>
            </div>
            <div class="form-control">
                Engine: 
                <input type="radio" v-model="newCar.engine" value="diesel" name="selection" required /> Diesel
                <input type="radio" v-model="newCar.engine" value="petrol" name="selection" /> Petrol
                <input type="radio" v-model="newCar.engine" value="electric" name="selection" /> Electric
                <input type="radio" v-model="newCar.engine" value="hybrid" name="selection" /> Hybrid
                <!-- svi radio buttoni moraju imati isti name da bi required radio -->
            </div>
                <button type="submit">Add a new car</button>
                <button type="button" @click="resetForm">Reset form</button>
                <button type="button" v-if="editable" @click="previewForm">Preview form</button>
                <!-- <div v-if="editable"> -->
                    <button type="submit" @click="editCar(newCar.id, newCar)">Submit edited car</button>
                <!-- </div> -->
        </form>

    </div>
</template>

<script>
import { carsService } from '../services/CarsService'

export default {
    data(){
        return {
            editable: false,      
            newCar: {
                brand:'', 
                model:'', 
                year:'', 
                maxSpeed:'', 
                isAutomatic: false, 
                engine:'', 
                numberOfDoors:''
            },
        }
    },

    computed: {
        yearsArray() {
            let years=[]
            for(let i=1990; i<2020; i++){
                years.push(i)
            }
            return years;
        }
    },

    methods: {
        getDefaults() {
            return {
                brand: '',
                model: '',
                year: '',
                maxSpeed: '',
                isAutomatic: false,
                engine: null,
                numberOfDoors: ''
            }
        },

        addCar(newCar) { //zadatak 3
         carsService.add(this.newCar)
                .then(() => {
                    this.newCar = this.getDefaults();
                    this.$router.push("/cars");
                })
                .catch(error => {
                    alert('Error with adding car!');
                });
        },

        resetForm() {
            this.newCar = {
                brand:'', 
                model:'',
                year:'', 
                maxSpeed:'', 
                isAutomatic:false, 
                engine:'', 
                numberOfDoors:''
            }
        },

        previewForm(){
            alert(JSON.stringify(this.newCar, null, 4))
        },

        getCar(id){
            carsService.get(id)
                .then(response => {
                    this.newCar = response.data
                }).catch(e=>{
                    console.log(e)
            })
        },

        editCar(newCar) {
            carsService.edit(this.newCar)
            .then(response => { 
                console.log('Here is car for edit!')
                })
            .catch(error => alert('Problem with getting car!'))
        }
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
    form {
        width: 50%;
        margin: 0 auto;
    }

    form input, form div, button {
        margin-bottom: 0.5rem;
    }

</style>
