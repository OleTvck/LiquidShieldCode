<script setup>
  import {
    ref
  } from "vue";
  import axios from "axios"

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

<template class="row">
  <div>
    <h1 class="display-3 text-center">Type what you would <br/>like to search the API for.</h1>
  </div>
  <div class="col text-center">
    <input type="string" id="userInput">
    <button @click="callAPI" class="btn btn-primary ">Call API</button>

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
  </div>
</template>

<style scoped>

</style>