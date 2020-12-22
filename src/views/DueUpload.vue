<template>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
          <h4 class="is-size-4">Upload dues: Library</h4>
          <hr />
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <div class="box" style="height: 100%">
            <h4 class="is-size-5">Update individual due</h4>
            <hr />
            <form action="">
              <b-field label="RollNumber">
                <b-input></b-input>
              </b-field>
              <b-field label="Amount">
                <b-input></b-input>
              </b-field>
              <div
                class="field is-flex is-justify-content-center is-align-items-center"
              >
                <button class="button is-success">Update</button>
              </div>
            </form>
          </div>
        </div>
        <div class="column">
          <div class="box">
            <h4 class="is-size-5">Bulk Upload</h4>
            <hr />
            <form action="">
              <b-field>
                <b-upload vx-model="dropFiles" multiple drag-drop expanded>
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
              <div
                class="field is-flex is-justify-content-center is-align-items-center"
              >
                <button class="button is-primary">Upload</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
</style>