<script setup>
  import { ref } from "vue";
  import axios from "axios"

  let options = [{
      text: 'Windows',
      value: 'Windows'
    },
    {
      text: 'Apache',
      value: 'Apache'
    },
    {
      text: 'VMWare',
      value: 'VMWare'
    },
    {
      text: 'Palo Alto',
      value: 'Palo Alto'
    },
    {
      text: 'Kaseya',
      value: 'Kaseya'
    },
    {
      text: 'Connect Wise',
      value: 'Connect Wise'
    }
  ]
  const result = ref({})
  const callAPI = () => {
    const userInput = document.getElementById("userInput").value
    axios
      .get('https://services.nvd.nist.gov/rest/json/cves/1.0?keyword=' + userInput, {
        timeout: 30000

      })
      .then(res => {
        result.value = res.data.result
      })
      .then(() => {
        console.log(result.value)
      })
      .catch(err => console.error(err));
    console.log(userInput)

  }
</script>

<template>

  <main>

    <form class="" id="callAPIform">
      <!-- This is the top row -->
      <div class="row">
        <h1 class="display-5">Type what you would <br />like to search the API for.</h1>
      </div>
      <!-- This is the middle row -->
      <div class="row ">
        <div class="input-group d-flex justify-content-center">
          <input type="text" id="userInput" placeholder="Type your system here to search..."
            class="form-control text-center">
          <button @click="callAPI" class="btn btn-primary" type="button" id="button-addon-2">Call API</button>
        </div>
      </div>
      <!-- This is the bottom row -->
      <br>
      <div v-for="option in options" class="form-check-inline p-1">
        <input type="checkbox" v-model="selected" :key="option.value" :value="option.value"
          :aria-describedby="ariaDescribedby" name="flavour-4a" class="m-1" inline />
        <label class="ml-1" :for="option.value" inline> {{ option.value }} </label>
      </div>


    <!-- data will pop up in the divs below -->


      <div class="" v-for="cve, index in result.CVE_Items" :key="`ID-${index}`">
        <br />
        <div>ID: {{ cve.cve.CVE_data_meta.ID }}</div>
        <div>Impact Score: {{ cve.impact.baseMetricV2 ? cve.impact.baseMetricV2.impactScore : `no impact` }}</div>
        <!-- Add Collapse Button Here  -->
        <p>
          <button class="btn btn-primary" type="button" data-bs-toggle="collapse" :data-bs-target="`#ID-${index}`"
            aria-expanded="false" aria-controls="collapseWidthExample">
            Toggle width collapse
          </button>
        </p>
        <!-- Collapse this Description -->
        <div style="min-height: 120px;" class="text-align-center">
          <div class="collapse collapse-horizontal mx-auto" :id="`ID-${index}`">
            <div class="card card-body mx-auto" style="width: 300px;">
              Description: {{ cve.cve.description.description_data[0].value }} </div>
          </div>
        </div>
      </div>
    </form>
  </main>
</template>

<style scoped>
  form#callAPIform input[type='string'] {
    border: 0px 0px 2px 0px solid black;
    color: rgb(34, 114, 115);
    appearance: none;


    background: none;
  }

  input {


    display: inline;

    max-width: 400px;

    font-size: 1.5rem;

  }

  input:not([type='submit']) {
    opacity: 0.8;
    transition: 0.4s;
  }

  input:focus:not([type='submit']) {
    opacity: 1;
  }

  input::placeholder {
    color: inherit;
  }
</style>