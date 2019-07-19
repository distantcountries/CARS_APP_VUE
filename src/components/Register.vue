<template> <!--zatadak 8 -->
    <div>
        <form @submit.prevent="register">
            <div style="width:50%; margin: 0 auto;">
                <div class="form-group">
                    <label for="username">Username:</label>
                    <input type="text" id="username" v-model="newUser.username" class="form-control" required />
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="text" id="email" v-model="newUser.email" class="form-control" required />
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" id="password" v-model="newUser.password" class="form-control" required />
                </div>
                <div class="form-group">
                    <label for="confirmPassword">Confirm password:</label>
                    <input type="password" id="confirmPassword" v-model="newUser.confirmPassword" class="form-control" required />
                </div>
                <div class="form-group">
                    <button type="submit">Register</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import { registerService } from '../services/RegisterService.js'

export default {
    data() {
        return {
            newUser: {
                username:'',
                email:'',
                password:'',
                confirmPassword:''
            },
        }
    },

    methods: {
        register() {
            registerService.register(this.newUser)
            .then(() => {
                this.$router.push({ name: "login" })
            })
        }
    }
}
</script>

<style>

</style>
