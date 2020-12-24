<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h2 class="title">Pending applications</h2>
          <hr />
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <b-table :data="tableData" :columns="columns" :debounce-search="500">
          </b-table>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      columns: [
        {
          field: "id",
          label: "ID",
          width: "80",
          numeric: true,
          searchable: true,
          sortable: true,
        },
        {
          field: "roll_number",
          label: "RollNumber",
           width: "180",
          searchable: true,
          sortable: true,
        },
        {
          field: "name",
          label: "Name",
          searchable: true,
        },

        {
          field: "date",
          label: "Submission date",
          centered: true,
          sortable: true,
        },
      ],
    };
  },
  computed: {
    ...mapGetters(['applications']),
    tableData() {
      if ( this.applications == null ) {
        return [];
      }
      return this.applications.map(item => {
        return { id: item.id, name: item.name, roll_number: item.owner.username, date: item.submission_date}
      })
    }
  },
  methods: {
    ...mapActions(['fetchApplicationsAction'])
  },
  mounted() {
    this.fetchApplicationsAction();
  }
};
</script>