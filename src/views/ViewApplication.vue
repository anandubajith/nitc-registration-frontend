<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <section
            :class="{
              hero: true,
              'is-success': status !== 'Not submitted',
              'is-danger': status === 'Not submitted ',
            }"
            v-if="user.user.role === 'user'"
          >
            <div class="hero-body">
              <div class="container">
                <div class="columns">
                  <div class="column">
                    <h1 class="is-size-4">
                      Status: <b>{{ status }}</b>
                    </h1>
                  </div>
                  <div class="column is-narrow-desktop">
                    <b-button type="is-info">Print application</b-button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="hero is-info" v-else>
            <div class="hero-body">
              <div class="container">
                <div class="columns">
                  <div class="column">
                    <h4 class="is-size-4">Actions</h4>
                  </div>
                  <div
                    class="column buttons is-flex is-justify-content-flex-end is-align-items-end"
                  >
                    <b-button type="is-success" @click="accept"
                      >Verify application</b-button
                    >
                    <b-button type="is-danger" @click="reject"
                      >Reject application</b-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div class="box">
        <div class="columns">
          <div class="column">
            <div class="columns">
              <div class="column">
                <h1 class="title">Details</h1>
                <hr />
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <b-field label="Roll Number">
                  <b-input
                    disabled
                    v-model="application.owner.username"
                  ></b-input>
                </b-field>
                <b-field label="Name">
                  <b-input
                    disabled
                    v-model="application.owner.username"
                  ></b-input>
                </b-field>
                <b-field label="Department">
                  <b-input
                    disabled
                    v-model="application.owner.department"
                  ></b-input>
                </b-field>
              </div>
              <div class="column">
                <b-field label="E Grantz">
                  <b-input disabled></b-input>
                </b-field>
                <b-field label="Base Category">
                  <b-input
                    disabled
                    v-model="application.owner.category"
                  ></b-input>
                </b-field>
                <b-field label="Application Category">
                  <b-input
                    disabled
                    v-model="application.owner.category"
                  ></b-input>
                </b-field>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <h1 class="title">Payment Info</h1>
                <hr />
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <b-field label="Mode of payment">
                  <b-input
                    disabled
                    v-model="application.payment.modeOfPayment"
                  ></b-input>
                </b-field>
                <b-field label="Bank">
                  <b-input
                    disabled
                    v-model="application.payment.bank"
                  ></b-input>
                </b-field>
                <b-field label="Transaction ID">
                  <b-input
                    disabled
                    v-model="application.payment.transactionId"
                  ></b-input>
                </b-field>
              </div>
              <div class="column">
                <b-field label="Amount">
                  <b-input
                    disabled
                    v-model="application.payment.amount"
                  ></b-input>
                </b-field>
                <b-field label="Payment Date">
                  <b-datepicker
                    disabled
                    model="selected"
                    placeholder="Click to select..."
                    icon="calendar-today"
                    trap-focus
                  >
                  </b-datepicker>
                </b-field>
              </div>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <h1 class="title">Uploaded Documents</h1>
            <hr />
          </div>
        </div>
        <div class="columns is-centered">
          <div class="column is-two-thirds">
            <div class="is-flex mb-2 is-align-items-center">
              <div style="margin-right: 10px; font-size: 1.25rem">
                DSS Fee payment Entry
              </div>
              <div style="flex: 1"></div>
              <b-button type="is-primary">Download</b-button>
            </div>
            <div class="is-flex mb-2 is-align-items-center">
              <div style="margin-right: 10px; font-size: 1.25rem">
                Fee payment receipt
              </div>
              <div style="flex: 1"></div>
              <b-button type="is-primary">Download</b-button>
            </div>
            <div class="is-flex mb-2 is-align-items-center">
              <div style="margin-right: 10px; font-size: 1.25rem">
                Document A
              </div>
              <div style="flex: 1"></div>
              <b-button type="is-primary">Download</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Application",
  data() {
    return {
      remark: "",
    };
  },
  computed: {
    ...mapGetters(["user", "application"]),
    status() {
      if (this.application == null) return "Not submitted";
      if (this.application.status === "pending_sac")
        return "Submitted for SAC Verification";
      if (this.application.status === "pending_fa")
        return "Submitted for Faculty Verification";
      if (this.application.status === "pending_academic")
        return "Submitted for Academic Verification";
      return "Provisionally verified";
    },
  },
  methods: {
    ...mapActions(["verifyApplicationAction"]),
    accept() {
      this.verifyApplicationAction({
        applicationId: this.application.id,
        remark: "accepted",
      });
    },
    reject() {
      this.$buefy.dialog.prompt({
        message: `Reason for rejection? `,
        trapFocus: true,
        onConfirm: (remark) => {
          this.verifyApplicationAction({
            applicationId: this.application.id,
            remark,
          });
        },
      });
    },
  },
  mounted() {},
};
</script>