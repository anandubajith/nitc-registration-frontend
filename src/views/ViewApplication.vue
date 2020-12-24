<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <section class="hero is-success">
            <div class="hero-body">
              <div class="container">
                <div class="columns">
                  <div class="column">
                    <h1 class="is-size-4">
                      Status: <b>Submitted for SAC Verification</b>
                    </h1>
                  </div>
                  <div class="column is-narrow-desktop">
                    <b-button type="is-info">Print application</b-button>
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
                  <b-input xv-model="application.owner.username"></b-input>
                </b-field>
                <b-field label="Name">
                  <b-input xv-model="application.owner.name"></b-input>
                </b-field>
                <b-field label="Department">
                  <b-input xv-model="application.owner.department"></b-input>
                </b-field>
              </div>
              <div class="column">
                <b-field label="E Grantz">
                  <b-input></b-input>
                </b-field>
                <b-field label="Base Category">
                  <b-input xv-model="application.owner.category"></b-input>
                </b-field>
                <b-field label="Application Category">
                  <b-input xv-model="application.owner.category"></b-input>
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
                    xv-model="application.payment.modeOfPayment"
                  ></b-input>
                </b-field>
                <b-field label="Bank">
                  <b-input
                    xv-model="application.payment.modeOfPayment"
                  ></b-input>
                </b-field>
                <b-field label="Transaction ID">
                  <b-input
                    xv-model="application.payment.modeOfPayment"
                  ></b-input>
                </b-field>
              </div>
              <div class="column">
                <b-field label="Amount">
                  <b-input
                    xv-model="application.payment.modeOfPayment"
                  ></b-input>
                </b-field>
                <b-field label="Payment Date">
                  <b-datepicker
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
        <div class="columns">
          <div class="column">
            <div class="is-flex mb-2 is-align-items-center">
              <div style="margin-right: 10px; font-size: 1.25rem">
                DSS Fee payment Entry
              </div>
              <b-button type="is-primary">Download</b-button>
            </div>
            <div class="is-flex mb-2 is-align-items-center">
              <div style="margin-right: 10px; font-size: 1.25rem">
                Fee payment receipt
              </div>
              <b-button type="is-primary">Download</b-button>
            </div>
            <div class="is-flex mb-2 is-align-items-center">
              <div style="margin-right: 10px; font-size: 1.25rem">
                Document A
              </div>
              <b-button type="is-primary">Download</b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Application",
  data() {
    return {
      application: {},
    };
  },
  mounted() {},
};
</script>