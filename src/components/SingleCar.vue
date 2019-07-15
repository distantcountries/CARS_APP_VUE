<template> <!-- zadatak 9 -->
    <div>
        Brand: {{ car.brand}}
        Model: {{ car.model}}
        Year of Production: {{ car.year}}
        Max Speed: {{ car.maxSpeed}}
        Number of doors: {{ car.numberOfDoors}}
    </div>
</template>

<script>
import { carsService } from '@/services/CarsService'

export default {
    data() {
        return{
            car:''
        }
    },

    beforeRouteEnter (to, from, next) {
        next(vm => {
        carsService.getCar(vm.$route.params.id)
            .then(response => {
            vm.car = response.data;
            }).catch(error => {
            alert(error);
            })
    })
  },
}
</script>

