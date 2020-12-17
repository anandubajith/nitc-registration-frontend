<template>
  <b-navbar type="is-primary">
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <h3>NIT-C Registration</h3>
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item tag="router-link" :to="{ path: '/home' }">
        Home
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/about' }">
        About
      </b-navbar-item>
      <b-navbar-item>
          <b-button type="is-danger" size="is-small" @click="logout">Logout</b-button>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
export default {
    name: 'Header',
    methods: {
        logout() {
            console.log('logging out')
        }
    }
}
</script>