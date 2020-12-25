<template>
  <b-navbar type="is-dark" :fixed-top="true" v-if="$route.path != '/'">
    <template slot="brand">
      <b-navbar-item xtag="router-link" xto="{ path: '/dashboard' }">
        <img src="../assets/logo.png" style="margin-right: 10px" />
        <h3>NIT-C Registration</h3>
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/dashboard' }"
        v-if="user.user.role === 'user'"
      >
        Dashboard
      </b-navbar-item>
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/applications/list' }"
        v-if="
          user.user.role === 'fa' ||
          user.user.role === 'sac_admin' ||
          user.user.role === 'academic_admin'
        "
      >
        Dashboard
      </b-navbar-item>
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/profile' }"
        v-if="user.user.role === 'user' || user.user.role === 'fa'"
      >
        Profile
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item>
        <b-button type="is-danger is-light" size="is-small" @click="logout"
          >Logout</b-button
        >
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Header",
  computed: { ...mapGetters(["user"]) },
  methods: {
    ...mapActions(["signOutAction"]),
    async logout() {
      await this.signOutAction();
      this.$router.replace("login");
    },
  },
};
</script>