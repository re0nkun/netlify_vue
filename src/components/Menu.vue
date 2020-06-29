<template>
  <div>
    <slot name="activator" :on="on"></slot>
    <slot v-if="display">
    </slot>

    <p>{{ msg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return{
      display: true,
      message: 'hello'
    }
  },
  methods: {
    on(){
      return this.display = !this.display;
    }
  },
  computed: {
    msg: function () {
      return this.message
    }
  }
}
</script>