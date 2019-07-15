<template> <!-- zadatak 5 -->
    <div>
        <form @submit.prevent="login">
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
            </div>
        </form>
    </div>
</template>

<script>
import { authService } from '../services/Auth.js'

export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },

    methods: {
      login() {
        authService.login(this.email, this.password)
          .then( response => {
            this.$router.push('/cars')
            }).catch ( error => {
            alert(error);
            });
      }
    },
}
</script>

