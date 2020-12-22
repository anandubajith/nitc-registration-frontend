<template>
  <section class="section">
    <div class="container">

      <!-- <h1 class="is-size-3">
        Show the Dues, The applicationStatus, View Application Link, Print Application , Edit application Link
      </h1> -->
      <div class="columns" v-if="hostelDue > 0 && libraryDue > 0">
        <div class="column">
          <b-message
            title="Pending dues"
            type="is-warning"
            aria-close-label="Close message"
          >
            <div class="columns">
              <div class="column">
                You have pending dues, clear them to submit application
              </div>
            </div>
            <div class="columns">
              <div
                class="column"
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <h4 class="is-size-3">Hostel Dues: ₹{{ hostelDue }}</h4>
              </div>
              <div
                class="column"
                style="
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <h4 class="is-size-3">Library Dues: ₹{{ libraryDue }}</h4>
              </div>
            </div>
          </b-message>
        </div>
      </div>
      <div class="columns" v-if="hostelDue <= 0 && libraryDue <=  0">
        <div class="column">
          <h2 class="is-size-3">You have cleared all dues</h2>
          <h2 class="is-size-4">Proceed to filling application</h2>
          <b-button type="is-primary" tag="router-link" to="/application"
            >Edit Application</b-button
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Dashboard",
  data() {
    return {
      hostelDue: 0,
      libraryDue: 0,
    };
  },
  mounted() {
    // dueService.getUserDue().then(data => {
    //   data.forEach(item => {
    //     if ( item.type === 'hostel') {
    //       this.hostelDue = item.amount;
    //     } else {
    //       this.libraryDue = item.amount;
    //     }
    //   })
    // })
  }
};
</script>