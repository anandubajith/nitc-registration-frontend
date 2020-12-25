<template>
  <section class="section">
    <div class="container">
      <b-steps v-model="activeStep" :has-navigation="false">
        <b-step-item step="1" label="Verify details" :clickable="false">
          <div class="box">
            <div class="columns">
              <div class="column">
                <h1 class="title">Details</h1>
                <hr />
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <b-field label="Roll Number">
                  <b-input v-model="user.user.username" disabled></b-input>
                </b-field>
                <b-field label="Name">
                  <b-input v-model="user.user.name" disabled></b-input>
                </b-field>
                <b-field label="Department">
                  <b-input v-model="user.user.department" disabled></b-input>
                </b-field>
              </div>
              <div class="column">
                <b-field label="E Grantz">
                  <b-input disabled></b-input>
                </b-field>
                <b-field label="Base Category">
                  <b-input v-model="user.user.category" disabled></b-input>
                </b-field>
                <b-field label="Application Category">
                  <b-input v-model="user.user.category" disabled></b-input>
                </b-field>
              </div>
            </div>
            <div class="columns">
              <div
                class="column is-flex is-justify-content-space-between is-align-items-center"
              >
                <b-button type="is-primary" @click="saveAndNext">
                  Save & Next
                </b-button>
              </div>
            </div>
          </div>
        </b-step-item>
        <b-step-item step="2" label="Payment details" :clickable="false">
          <div class="box">
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
                    v-model="application.payment.modeOfPayment"
                  ></b-input>
                </b-field>
                <b-field label="Bank">
                  <b-input
                    v-model="application.payment.bank"
                  ></b-input>
                </b-field>
                <b-field label="Transaction ID">
                  <b-input
                    v-model="application.payment.transactionId"
                  ></b-input>
                </b-field>
              </div>
              <div class="column">
                <b-field label="Amount">
                  <b-input v-model="application.payment.amount"></b-input>
                </b-field>
                <b-field label="Payment Date">
                  <b-datepicker
                    model="selected"
                    placeholder="Click to select..."
                    icon="calendar-today"
                    v-model="application.payment.paymentDate"
                    trap-focus
                  >
                  </b-datepicker>
                </b-field>
              </div>
            </div>
            <div class="columns">
              <div
                class="column is-flex is-justify-content-space-between is-align-items-center"
              >
                <b-button type="is-primary" @click="saveAndNext" :disabled="!stage2Valid">
                  Save & Next
                </b-button>
              </div>
            </div>
          </div>
        </b-step-item>
        <b-step-item step="3" label="Document upload" :clickable="false">
          <div class="box">
            <div class="columns">
              <div class="column">
                <h1 class="title">Document Uplaod</h1>
                <hr />
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <b-field label="Fee payment receipt">
                  <b-upload multiple drag-drop>
                    <section class="section">
                      <div class="content has-text-centered">
                        <p>
                          <b-icon icon="upload" size="is-large"> </b-icon>
                        </p>
                        <p>Drop your files here or click to upload</p>
                      </div>
                    </section>
                  </b-upload>
                </b-field>
              </div>
              <div class="column">
                <b-field label="DSS Fee payment entry">
                  <b-upload multiple drag-drop>
                    <section class="section">
                      <div class="content has-text-centered">
                        <p>
                          <b-icon icon="upload" size="is-large"> </b-icon>
                        </p>
                        <p>Drop your files here or click to upload</p>
                      </div>
                    </section>
                  </b-upload>
                </b-field>
              </div>
              <div class="column">
                <b-field label="Other documents">
                  <b-upload multiple drag-drop>
                    <section class="section">
                      <div class="content has-text-centered">
                        <p>
                          <b-icon icon="upload" size="is-large"> </b-icon>
                        </p>
                        <p>Drop your files here or click to upload</p>
                      </div>
                    </section>
                  </b-upload>
                </b-field>
              </div>
            </div>
            <div class="columns">
              <div
                class="column is-flex is-justify-content-space-between is-align-items-center"
              >
                <b-button type="is-success" @click="saveAndNext">
                  Submit application
                </b-button>
              </div>
            </div>
          </div>
        </b-step-item>
      </b-steps>
    </div>
  </section>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      activeStep: 0,
      application: {
        payment: {
          transactionId: "",
          amount: "",
          paymentDate: null,
          bank: "",
          modeOfPayment: "",
        },
      },
    };
  },
  computed: {
    ...mapGetters(["user"]),
    stage2Valid() {
      return this.application.payment.modeOfPayment != null
                && this.application.payment.amount != null
                && this.application.payment.bank != null
                && this.application.payment.paymentDate != null
                && this.application.payment.transactionId != null;
    }
  },
  methods: {
    ...mapActions(['updateApplicationAction']),
    saveAndNext() {
      // call validate based on step
      this.$buefy.dialog.confirm({
        title: "Confirm",
        message: "I confirm that all the above details are correct",
        onConfirm: () => {
          if (this.activeStep < 2) {
            this.activeStep++;
          } else {
            this.updateApplicationAction(this.application)
          }
        },
      });
    },
  },
};
</script>
<style>
.upload-draggable.is-primary,
.upload.control {
  width: 100%;
}
</style>