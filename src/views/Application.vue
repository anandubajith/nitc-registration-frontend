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
            <b-field label="Roll Number">
              <b-input></b-input>
            </b-field>
            <b-field label="Name">
              <b-input></b-input>
            </b-field>
            <b-field label="Department">
              <b-input></b-input>
            </b-field>
          </div>
          <div class="column">
            <b-field label="E Grantz">
              <b-input></b-input>
            </b-field>
            <b-field label="Base Category">
              <b-input></b-input>
            </b-field>
            <b-field label="Application Category">
              <b-input></b-input>
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
              <b-input></b-input>
            </b-field>
            <b-field label="Bank">
              <b-input></b-input>
            </b-field>
            <b-field label="Transaction Id">
              <b-input></b-input>
            </b-field>
            <b-field label="Amount">
              <b-input></b-input>
            </b-field>
            <b-field label="Payment Date">
              <b-datepicker
                v-model="selected"
                :show-week-number="showWeekNumber"
                :locale="locale"
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
        <b-button size="is-large" type="is-primary"
          >Submit Application</b-button
        >
      </div>
    </div>
  </section>
</template>