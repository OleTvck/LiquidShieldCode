<script setup>
  import {
    ref
  } from "vue";
  import axios from "axios"
  
  const result = ref({})
  
  const callAPI = () => {
    const userInput = document.getElementById("userInput").value
    axios
      .get('https://services.nvd.nist.gov/rest/json/cves/1.0?keyword='+userInput, {
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
  <div>
    <input type="string" id="userInput">
    <button @click="callAPI">Call API</button>

    <div v-for="cve, index in result.CVE_Items" :key="`ID-${index}`">
      <br />
      <div>ID: {{ cve.cve.CVE_data_meta.ID }}</div>
      <!--<div>Impact Score: {{ cve.impact.baseMetricV2.impactScore }}</div>-->
      <br />
      <div>Description: {{ cve.cve.description.description_data[0].value }}</div>


    </div>
  </div>
</template>

<style scoped>

</style>