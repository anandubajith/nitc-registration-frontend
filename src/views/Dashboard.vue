<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <ApplicationStatus  :hasSubmittedApplication="true"/>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <Due :hostelDue="123" :libraryDue="100" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import Due from "../components/Due.vue";
import ApplicationStatus from "../components/ApplicationStatus.vue";
export default {
  name: "Dashboard",
  data() {
    return {
      hostelDue: 0,
      libraryDue: 0,
    };
  },
  components: {
    Due,
    ApplicationStatus,
  },
  computed: {
    ...mapGetters(["dues"]),
  },
  methods: {
    ...mapActions(["fetchDueAction"]),
  },
  mounted() {
    this.fetchDueAction();
    // dueService.getUserDue().then(data => {
    //   data.forEach(item => {
    //     if ( item.type === 'hostel') {
    //       this.hostelDue = item.amount;
    //     } else {
    //       this.libraryDue = item.amount;
    //     }
    //   })
    // })
  },
};
</script>