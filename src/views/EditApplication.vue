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
              <div
                class="column is-flex is-justify-content-space-between is-align-items-center"
              >
                <b-checkbox
                  >I have verified the details and they are correct</b-checkbox
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
            <div class="columns">
              <div
                class="column is-flex is-justify-content-space-between is-align-items-center"
              >
                <b-checkbox
                  >I have verified the details and they are correct</b-checkbox
                >
                <b-button type="is-primary" @click="saveAndNext">
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
                <b-checkbox>all done, submit the application</b-checkbox>
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
export default {
  data() {
    return {
      activeStep: 0,
    };
  },
  methods: {
    saveAndNext() {
      this.activeStep++;
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