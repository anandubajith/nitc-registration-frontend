<template>
  <div
    :class="{
      'due hero': true,
      'is-warning': hostelDue > 0 || libraryDue > 0,
      'is-success': hostelDue <= 0 && libraryDue <= 0,
    }"
  >
    <div v-if="hostelDue > 0 || libraryDue > 0" class="hero-body container">
      <h1 class="title">You have pending dues</h1>
      <h2 class="subtitle">Clear them to proceed with registration</h2>
      <div class="columns">
        <div
          class="column is-flex is-justify-content-center is-align-items-center"
        >
          <b-field label="Library Due">
            <b-input disabled :value="libraryDue" type="search"></b-input>
            <p class="control">
              <b-button class="button is-primary">Pay Now</b-button>
            </p>
          </b-field>
        </div>
        <div
          class="column is-flex is-justify-content-center is-align-items-center"
        >
          <b-field label="Hostel Due">
            <b-input disabled :value="hostelDue" type="search"></b-input>
            <p class="control">
              <b-button class="button is-primary">Pay Now</b-button>
            </p>
          </b-field>
        </div>
      </div>
    </div>
    <div class="hero-body container" v-else>
      <h1 class="title">No pending dues</h1>
    </div>
  </div>
</template>
<script>
export default {
  props: ["hostelDue", "libraryDue"],
};
</script>
<style>
.due {
  border-radius: 4px;
}
</style>