<template>
  <section class="section">
    <div class="container">
      <div class="box">
        <div class="columns">
          <div class="column">
            <h4 class="is-size-4">Profile</h4>
            <hr />
          </div>
        </div>
        <div v-if="user.user.role == 'fa'">
          <div class="columns">
            <div class="column">
              <b-field label="Name">
                <b-input></b-input>
              </b-field>
            </div>
            <div class="column">
              <b-field label="Contact Number">
                <b-input></b-input>
              </b-field>
            </div>
          </div>
          <div class="columns">
            <div
              class="column is-flex is-justify-content-center is-align-items-center"
            >
              <div class="xbox">
                <b-button type="is-primary" @click="saveProfile">Save</b-button>
              </div>
            </div>
          </div>
        </div>
        <div v-if="user.user.role == 'user'">
          <div class="columns">
            <div class="column">
              <b-field label="Contact Number">
                <b-input v-model="user.user.contactNumber"></b-input>
              </b-field>
            </div>
            <div class="column">
              <b-field label="Email">
                <b-input v-model="user.user.email"></b-input>
              </b-field>
            </div>
          </div>
          <div class="columns is-vcentered">
            <div class="column">
              <b-field label="Choose FA Name">
                <b-autocomplete
                  v-model="user.user.faName"
                  :data="filteredDataArray"
                  placeholder="Enter FA name"
                  @select="(option) => (selected = option)"
                >
                  <template slot="empty">No results found</template>
                </b-autocomplete>
              </b-field>
            </div>
            <div class="column">
              <b-field label="Eligible for EGrantz">
                <b-switch v-model="user.user.egrantz"></b-switch>
              </b-field>
            </div>
          </div>
          <div class="columns">
            <div
              class="column is-flex is-justify-content-center is-align-items-center"
            >
              <div class="xbox">
                <b-button type="is-primary" @click="saveProfile">Save</b-button>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <h4 class="is-size-5">Change password</h4>
            <hr />
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <b-field label="New password">
              <b-input
                type="password"
                v-model="password.newPassword"
                password-reveal
              ></b-input>
            </b-field>
          </div>
          <div class="column">
            <b-field label="Confirm password">
              <b-input
                type="password"
                v-model="password.newPasswordConfirm"
              ></b-input>
            </b-field>
          </div>
          <div class="column">
            <b-field label="Current password">
              <b-input
                type="password"
                v-model="password.oldPassword"
                password-reveal
              ></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div
            class="column is-flex is-justify-content-center is-align-items-center"
          >
            <b-button
              type="is-primary"
              @click="updatePassword"
              :disabled="
                this.password.newPassword.length === 0 ||
                this.password.oldPassword.length === 0
              "
              >Update password</b-button
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Profile",
  data() {
    return {
      selected: null,
      currentPassword: "",
      newPassword: "",
      name: "",
      contactNumber: "",
      email: "",
      category: "",
      faName: "",
      egrantz: false,
      password: {
        newPassword: "",
        newPasswordConfirm: "",
        oldPassword: "",
      },
    };
  },
  computed: {
    ...mapGetters(["user", "faNames"]),
    filteredDataArray() {
      return this.faNames.filter((option) => {
        return (
          option.toString().toLowerCase().indexOf(this.name.toLowerCase()) >= 0
        );
      });
    },
  },
  methods: {
    ...mapActions([
      "getFaNamesAction",
      "updateDetailsAction",
      "updatePasswordAction",
    ]),
    saveProfile() {
      this.updateDetailsAction(this.user.user);
    },
    updatePassword() {
      if (this.password.newPassword !== this.password.newPasswordConfirm) {
        this.$buefy.toast.open("Passwords must match");
      }
      this.updatePasswordAction({
        oldPassword: this.password.oldPassword,
        newPassword: this.password.newPassword,
      });
    },
  },
  mounted() {
    this.getFaNamesAction();
  },
};
</script>