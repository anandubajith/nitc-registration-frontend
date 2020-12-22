<template>
  <section class="section">
    <div class="container">
      <div class="box">
        <div class="columns">
          <div class="column">
            <h4 class="is-size-4">Profile</h4>
            <hr />
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <b-field label="Contact Number">
              <b-input></b-input>
            </b-field>
          </div>
          <div class="column">
            <b-field label="Email">
              <b-input></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <b-field label="Choose FA Name">
              <b-select placeholder="Choose FA Name" expanded>
                <option value="Test">Test 1</option>
                <option value="Test">Test 2</option>
                <option value="Test">Test 3</option>
              </b-select>
            </b-field>
          </div>
          <div class="column">
            <b-field label="Eligible for EGrantz">
              <b-switch></b-switch>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column is-flex is-justify-content-center is-align-items-center">
            <div class="xbox">
              <b-button type="is-primary">Save</b-button>
            </div>
          </div>
        </div>
        <div class="columns ">
          <div class="column ">
            <h4 class="is-size-5">Change password</h4>
            <hr />
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <b-field label="New password">
              <b-input></b-input>
            </b-field>
          </div>
          <div class="column">
            <b-field label="Confirm password">
              <b-input></b-input>
            </b-field>
          </div>
          <div class="column">
            <b-field label="Current password">
              <b-input></b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column  is-flex is-justify-content-center is-align-items-center">
            <b-button type="is-primary">Update password</b-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Profile",
};
</script>