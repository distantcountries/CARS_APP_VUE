<template> <!-- zadatak 5 -->
    <div>
        <form @submit.prevent="submitForm">
            <div style="width:50%; margin: 0 auto;">
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="text" id="email" v-model="email" class="form-control" required />
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" v-model="password" class="form-control" />
                </div>
                 <button type="submit">Login</button>
                  <p class="errorMessage">{{ errorMessage }}</p>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { authService } from '../services/Auth.js'

export default {
    data() {
      return {
        email: '',
        password: '',
        errorMessage:null
      }
    },

    methods: {
      // login() {
      //   authService.login(this.email, this.password)
      //     .then(() => {
      //       this.$router.push({ name: "cars" })
      //     })
      //     .catch(() => {
      //       this.errorMessage = 'Something wrong with login!';
      //     })
      // }, 
      
      ...mapActions({
            login:'login'
        }),

        submitForm() {
            this.login({
                email: this.email,
                password: this.password
            }).then(() => {
                this.$router.push('/cars')
            });
        }
      
    }
}
</script>

<style>
.errorMessage {
  color: pink;
}
</style>


