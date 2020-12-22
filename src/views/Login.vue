<template>
  <section class="hero is-fullheight bg" style="">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <form
              action=""
              class="box has-text-light has-background-dark"
              @submit.prevent="handleLogin"
            >
              <img
                src="../assets/logo.png"
                style="max-width: 140px; display: block; margin: auto"
                alt="NIT-C logo"
              />
              <h3 class="is-size-5 has-text-weight-medium has-text-centered">
                NIT-C Registration
              </h3>
              <div class="field">
                <label for="" class="label has-text-grey-light">Username</label>
                <div class="control has-icons-left">
                  <input
                    type="text"
                    placeholder="e.g. B180288CS"
                    v-model="username"
                    class="input"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label for="" class="label has-text-grey-light">Password</label>
                <div class="control has-icons-left">
                  <b-input
                    type="password"
                    placeholder="********"
                    v-model="password"
                    password-reveal
                  >
                  </b-input>
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div
                class="field is-flex is-justify-content-center is-align-items-center"
              >
                <button class="button is-success">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "login",
  data() {
    return {
      username: "anandu",
      password: "password",
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    ...mapActions(["signInAction"]),
    async handleLogin() {
      const user = {
        username: this.username,
        password: this.password,
      };
      await this.signInAction(user);
      const { role } = this.user.user;
      if (role == "user") {
        this.$router.replace("dashboard");
      } else if (role == "library_admin" || role === "hostel_admin") {
        this.$router.replace("due");
      } else if (
        role === "fa" ||
        role === "sac_admin" ||
        role === "academic_admin"
      ) {
        this.$router.replace("applications/list");
      }
    },
  },
};
</script>
<style>
.bg {
  min-height: 100vh;
  background-image: url("../assets/bg.jpg");
  background-size: cover;
}
</style>