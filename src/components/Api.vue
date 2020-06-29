<template>
  <div id="app">
    {{ datas }}
    <!-- <div 
      v-for="(data, index) in datas"
      :key="index"
    >  
      {{ data }}:
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      datas: null,
    }
  },
  mounted () {
    axios
      .get("https://suspicious-brahmagupta-da2634.netlify.com/.netlify/functions/user")
      .then(res => this.datas = res)
  }
}
</script>

<style>

</style>