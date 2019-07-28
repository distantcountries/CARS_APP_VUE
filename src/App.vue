<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark" style="color:white;">
      <router-link to="/cars" style="color:white;">Cars</router-link>
      <router-link to="/add" style="color:white;">Add Car</router-link> <!--zadatak 3 -->

      <div v-if="!isAuthenticated">
        <router-link to="/login" style="color:white;">Login</router-link> <!--zadatak 5 -->
      </div>
      <div v-if="isAuthenticated">
        <a href="#" @click="logout"  style="color:white;">Logout</a> <!--zadatak 6 radi ali tek na refresh...neka greska...isto kada  --> 
      </div>
      <div v-if="!isAuthenticated">
         <router-link to="/register" style="color:white;">Register</router-link> <!--zadatak 8 -->
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
//zadatak 5
import { authService } from './services/Auth'
  export default {
    name: "app",
    data() {
      return {
        isAuthenticated: false
      };
    },
    created() {
      this.isAuthenticated = authService.isAuthenticated();
    },
    methods: {
      logout() {
        authService.logout();
        this.$router.push("/login");
      }
    }
};
</script>

