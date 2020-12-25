<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h2 class="title">{{greeting}}</h2>
          <hr />
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <b-table :data="tableData" :debounce-search="500">
            <b-table-column
              v-for="(column, index) in columns"
              :key="index"
              :label="column.label"
              :visible="true"
              v-slot="props"
            >
              {{ props.row[column.field] }}
            </b-table-column>
            <b-table-column label="Actions" :visible="true" v-slot="props">
              <b-button type="is-info" size="is-small" @click="viewApplication(props.row.id)">View</b-button>
            </b-table-column>
          </b-table>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
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
    ...mapGetters(["applications", "user"]),
    greeting() {
      if ( this.user == null )
        return 'Pending applications';
      if ( this.user.user.role === 'fa' )
        return 'Pending applications for Faculty verificaiton'; 
      if ( this.user.user.role === 'sac_admin' )
        return 'Pending applications for SAC verificaiton'; 
      if ( this.user.user.role === 'academic_admin')
        return 'Pending applications for Academic verificaiton'; 
      
      return 'Pending applications';
    },
    tableData() {
      if (this.applications == null) {
        return [];
      }
      return this.applications.map((item) => {
        return {
          id: item.id,
          name: item.owner.name,
          roll_number: item.owner.username,
          date: item.submission_date,
        };
      });
    },
  },
  methods: {
    ...mapActions(["fetchApplicationsAction","fetchApplicationByIdAction"]),
    viewApplication(id) {
      this.fetchApplicationByIdAction(id).then(() => {
        this.$router.push('/application')
      })
    }
  },
  mounted() {
    this.fetchApplicationsAction();
  },
};
</script>