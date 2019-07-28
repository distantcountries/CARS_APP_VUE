<template> <!-- zadatak 9 -->
    <div style="padding:2rem; margin:2rem; width:30%; background-color:#DAF7A6; border-radius:2rem;">
        <p style="color:#78281F; "><span style="font-weight:bold;">Brand: </span>{{ car.brand}}</p>
        <p style="color:#78281F; "><span style="font-weight:bold;">Model: </span>{{ car.model}}</p>
        <p style="color:#78281F; "><span style="font-weight:bold;">Year of Production: </span>{{ car.year}}</p>
        <p style="color:#78281F; "><span style="font-weight:bold;">Max Speed: </span>{{ car.maxSpeed}}</p>
        <p style="color:#78281F; "><span style="font-weight:bold;">Number of doors: </span>{{ car.numberOfDoors}}</p>
    </div>
</template>

<script>
import { carsService } from '../services/CarsService'

export default {
    data() {
        return{
            car:''
        }
    },

    //umesto create()
    beforeRouteEnter (to, from, next) {
        next(vm => {
            carsService.get(vm.$route.params.id)
                .then(response => {
                    vm.car = response.data;
                }).
                catch(error => {
                    alert(error);
                })
        })
    },
}
</script>

