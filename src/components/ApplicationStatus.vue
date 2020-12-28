<template>
  <div
    :class="{
      'application-status due hero': true,
      'is-info': hasSubmittedApplication,
      'is-danger':
        !hasSubmittedApplication ||
        (application.verificationStatus.remark != 'pending' && application.verificationStatus.remark != 'accepted'),
    }"
  >
    <div class="hero-body container" v-if="hasSubmittedApplication">
      <div class="mb-1" v-if="application.verificationStatus.remark != 'pending' && application.verificationStatus.remark != 'accepted' ">
        <h1 class="title">Application Rejected</h1>
        <h2 class="subtitle">
          Remark: {{ application.verificationStatus.remark }}
        </h2>
        <br>
      </div>
      <div class="mb-1" v-else>
        <h1 class="title">You have submitted application</h1>
        <h2 class="subtitle">{{ status }}</h2>
      </div>

      <div class="is-flex buttons">
        <b-button tag="router-link" to="/application"
          >View application</b-button
        >
        <b-button tag="router-link" to="/application/edit"
          v-if="!hasSubmittedApplication || application.verificationStatus.remark != 'accepted'"
          >Edit application</b-button
        >
        <b-button tag="router-link" to="/application"
          >Print application</b-button
        >
      </div>
    </div>
    <div class="hero-body container" v-if="!hasSubmittedApplication">
      <h1 class="title">Application not submitted</h1>
      <h2 class="subtitle">
        You have not submitted application, proceed to edit application
      </h2>
      <div class="is-flex buttons">
        <b-button tag="router-link" to="/application/edit"
          >Edit application</b-button
        >
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  props: ["hasSubmittedApplication"],
  computed: {
    ...mapGetters(["application"]),
    status() {
      if (this.application.status === "pending_sac") {
        return "Application is pending SAC verification";
      }
      if (this.application.status === "pending_fa") {
        return "Application is pending Faculty verification";
      }
      if (this.application.status === "pending_academic") {
        return "Application is pending Academic verification";
      }
      if (this.application.status === "verified") {
        return "Application verified";
      }
      return 'loading';
    },
  },
};
</script>