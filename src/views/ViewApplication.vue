<template>
  <section class="section">
    <div class="container">
      <div class="box">
        <div class="columns">
          <div class="column">
            <h3 class="is-size-4">Details</h3>
            <hr />
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <!-- {{ application | json}} -->
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
            <b-field label="Payment Method">
              <b-input value="SBI Collect Online Payment"></b-input>
            </b-field>
          </div>
          <div
            class="column"
            style="display: flex; justify-content: center; align-items: center"
          >
            <h4 class="is-size-3">Amount to be paid ₹68,000</h4>
          </div>
          <div
            class="column"
            style="display: flex; justify-content: center; align-items: center"
          >
            <b-button size="is-medium" type="is-success"> Pay Now</b-button>
          </div>
        </div>
      </div>

      <div class="box">
        <div class="columns">
          <div class="column">
            <h3 class="is-size-4">Payment details</h3>
            <hr />
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <b-field label="Mode of payment">
              <b-input xv-model="application.payment.modeOfPayment"></b-input>
            </b-field>
            <b-field label="Bank">
              <b-input xv-model="application.payment.bank"></b-input>
            </b-field>
            <b-field label="Transaction Id">
              <b-input xv-model="application.payment.transactionId"></b-input>
            </b-field>
            <b-field label="Amount">
              <b-input xv-model="application.payment.amount"></b-input>
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
      <div
        class="box"
        style="display: flex; justify-content: center; align-items: center"
      >
        <b-button size="is-large" type="is-primary">Save</b-button>
      </div>
      <b-collapse class="card" animation="slide" aria-id="contentIdForA11y3">
        <div
          slot="trigger"
          slot-scope="props"
          class="card-header"
          role="button"
          aria-controls="contentIdForA11y3"
        >
          <p class="card-header-title">Document Uploads</p>
          <a class="card-header-icon">
            <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"> </b-icon>
          </a>
        </div>
        <div class="card-content">
          <div class="content">
            <h3>Fee Payment Receipt</h3>
            <div
              class="box"
              style="
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <b-field class="file is-primary" :class="{ 'has-name': !!file }">
                <b-upload xv-model="file" class="file-label">
                  <span class="file-cta">
                    <b-icon class="file-icon" icon="upload"></b-icon>
                    <span class="file-label">Click to upload</span>
                  </span>
                  <span class="file-name" v-if="file">
                    {{ file.name }}
                  </span>
                </b-upload>
              </b-field>
            </div>
            <h3>DSS Fee Payment Entry</h3>
            <div
              class="box"
              style="
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <b-field class="file is-primary" :class="{ 'has-name': !!file }">
                <b-upload xv-model="file" class="file-label">
                  <span class="file-cta">
                    <b-icon class="file-icon" icon="upload"></b-icon>
                    <span class="file-label">Click to upload</span>
                  </span>
                  <span class="file-name" v-if="file">
                    {{ file.name }}
                  </span>
                </b-upload>
              </b-field>
            </div>
            <h3>Other Documents</h3>
            <div
              class="box"
              style="
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <b-field class="file is-primary" :class="{ 'has-name': !!file }">
                <b-upload xv-model="file" class="file-label">
                  <span class="file-cta">
                    <b-icon class="file-icon" icon="upload"></b-icon>
                    <span class="file-label">Click to upload</span>
                  </span>
                  <span class="file-name" v-if="file">
                    {{ file.name }}
                  </span>
                </b-upload>
              </b-field>
            </div>
            <div
              class="box"
              style="
                display: flex;
                justify-content: center;
                align-items: center;
              "
            >
              <b-button size="is-large" type="is-primary">Submit</b-button>
            </div>
          </div>
        </div></b-collapse
      >
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