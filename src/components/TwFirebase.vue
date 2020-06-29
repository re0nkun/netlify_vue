<template>
  <div id="app">
    <input type="text" v-model="name">
    <input type="button" value="send" @click="hello"><br>
    {{ api }}
  </div>
</template>

<script>
import firebase from '../firebase.js'
export default {
  data () {
    return {
      name: '',
      api: null,
    }
  },
  methods: {
    hello () {
      const hello = firebase.functions().httpsCallable('api')
      hello({ name: this.name })
        .then(result => {
          this.api = result
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style>

</style>