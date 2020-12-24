<template>
  <div
    :class="{
      'application-status due hero': true,
      'is-info': hasSubmittedApplication,
      'is-danger': !hasSubmittedApplication,
    }"
  >
    <div class="hero-body container" v-if="hasSubmittedApplication">
      <h1 class="title">You have submitted application</h1>
      <h2 class="subtitle">Application is pending <b>SAC verification</b></h2>
      <div class="is-flex buttons">
        <b-button tag="router-link" to="/application">View application</b-button>
        <b-button tag="router-link" to="/application/edit">Edit application</b-button>
        <b-button tag="router-link" to="/application">Print application</b-button>
      </div>
    </div>
    <div class="hero-body container" v-if="!hasSubmittedApplication">
      <h1 class="title">Application not submitted</h1>
      <h2 class="subtitle">
        You have not submitted application, proceed to edit application
      </h2>
      <div class="is-flex buttons">
        <b-button  tag="router-link" to="/application/edit">Edit application</b-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["hasSubmittedApplication"],
};
</script>