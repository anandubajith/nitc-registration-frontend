<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <ApplicationStatus
            :hasSubmittedApplication="hasSubmittedApplication"
          />
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <Due :hostelDue="hostelDue" :libraryDue="libraryDue" />
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
    return {};
  },
  components: {
    Due,
    ApplicationStatus,
  },
  computed: {
    ...mapGetters(["dues", "application"]),
    hostelDue() {
      if (this.dues === null) return 0;
      return this.dues.find((due) => due.type === "hostel").amount;
    },
    libraryDue() {
      if (this.dues === null) return 0;
      return this.dues.find((due) => due.type === "library").amount;
    },
    hasSubmittedApplication() {
      if (this.application == null) return {};
      return this.application.status === "pending";
    },
  },
  methods: {
    ...mapActions(["fetchDueAction", "fetchUserApplicationAction"]),
  },
  mounted() {
    this.fetchDueAction();
    this.fetchUserApplicationAction();
  },
};
</script>