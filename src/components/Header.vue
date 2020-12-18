<template>
  <b-navbar type="is-primary">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <h3>NIT-C Registration</h3>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="router-link" :to="{ path: '/home' }">
        Login
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
      <b-navbar-item>
        {{ auth}}
          <b-button type="is-danger" size="is-small" @click="logout">Logout</b-button>
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
            this.$router.push("/login")
        }
    }
}
</script>