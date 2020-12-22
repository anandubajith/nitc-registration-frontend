<template>
  <section class="hero is-fullheight bg" style="">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <form action="" class="box" @submit.prevent="handleLogin">
              <div class="field">
                <label for="" class="label">Email</label>
                <div class="control has-icons-left">
                  <input
                    type="text"
                    placeholder="e.g. bobsmith@gmail.com"
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
                <label for="" class="label">Password</label>
                <div class="control has-icons-left">
                  <input
                    type="password"
                    value="password"
                    placeholder="*******"
                    v-model="password"
                    class="input"
                    required
                  />
                  <span class="icon is-small is-left">
                    <i class="fa fa-lock"></i>
                  </span>
                </div>
              </div>
              <div class="field">
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
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["signInAction"]),
    async handleLogin() {
      const user = {
        username: this.username,
        password: this.password,
      };
      await this.signInAction(user);
      this.$router.replace("dashboard");
    },
  },
};
</script>
<style>
.bg {
  min-height: 100vh;
  background-image: url('https://nitc-hostel-dues.web.app/bg.jpg');
  background-size: cover;
}
</style>