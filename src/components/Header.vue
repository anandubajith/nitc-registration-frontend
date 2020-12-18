<template>
  <b-navbar type="is-dark" fixed-top=true  v-if="$route.path != '/'">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img src='../assets/logo.png'>
        <h3>NIT-C Registration</h3>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ path: '/home' }">
        Status
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/dashboard' }">
        Dashboard
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/application' }">
        Application
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/profile' }">
        Profile
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item>
          <b-button type="is-danger is-light" size="is-small" @click="logout">Logout</b-button>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
import authService from '../services/auth.service';

export default {
    name: 'Header',
    computed: {
    },
    methods: {
        logout() {
            console.log('logging out');
            authService.logout();
             this.$store.dispatch('auth/logout');
            this.$router.push("/login")
        }
    }
}
</script>