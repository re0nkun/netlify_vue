<template>
  <div></div>
</template>

<script>
export default {
  props: ['tweetId'],
  created() {
    if (this.tweetId) {
      window.twttr.widgets.createTweet (
        this.tweetId,
        this.$el,
        {}
      )
      .then(el => {
        el.contentWindow.document.querySelector(".CallToAction").style.display = "none"
      })
    }
  }
}
</script>