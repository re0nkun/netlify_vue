<template>
  <div id="app">
    <div 
      v-for="(data, index) in showDatas"
      :key="index"
    >
        {{ data }}:
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    showDatas() {
      return this.$store.getters.showDatas
    }
  },
  mounted () {
    this.$store.dispatch('getApi')

    // var myHeaders = new Headers();
    // myHeaders.append("Authorization", "Bearer AAAAAAAAAAAAAAAAAAAAANBiCwEAAAAAiBubH4llvU4%2BplWPE6N7PLJZhCw%3DmKP8AgajOSp43seZfgEubLkeJDNLy0H8NYf1TQXbNLyDHuUMtg");

    // var requestOptions = {
    //   method: 'GET',
    //   headers: myHeaders,
    //   redirect: 'follow',
    //   // mode: 'no-cors'
    // };

    // fetch("https://api.twitter.com/1.1/search/tweets.json?count=1&q=hakodate", requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));
    //   }
    }
}
</script>

<style>

</style>