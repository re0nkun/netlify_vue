<template>
  <div>
    <!-- <v-card max-width="400" class="mx-auto my-auto" hover>
      <v-carousel
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(slide, i) in slides"
          :key="i"
        >
          <v-sheet
            :color="colors[i]"
            height="100%"
          >
            <v-row
              class="fill-height"
              align="center"
              justify="center"
            >
              <div>{{ slide }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>

      <v-card-title>My Carousel</v-card-title>
      <v-card-subtitle class="font-italic font-weight-black">John</v-card-subtitle>
      <v-avatar class="mx-6">
        <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
      </v-avatar>
      <v-card-text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </v-card-text>
    </v-card> -->

    <!-- <v-container fluid>
    <v-fade-transition mode="out-in">
      <v-row 
        justify="left"
        no-gutters
      >
        <v-col 
          cols="3"
          v-for="(status, index) in statuses" 
          :key="index"
        >
          <v-card 
            color="grey lighten-3" 
            tile 
            class="ma-1 pa-0"
          >
            <v-list-item>
              <v-list-item-avatar size="40">
                <v-img :src="status.user.profile_image_url_https"></v-img>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{ status.user.name }}</v-list-item-title>
                <v-list-item-subtitle>@{{ status.user.screen_name }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-card-text>
              <div class="text-truncate">
                {{status.text}}
              </div>
            </v-card-text>
            
            <div v-if="status.extended_entities">
              <v-img
                :src="status.extended_entities.media[0].media_url_https"
                lazy-src="@/assets/dummy.png"
              ></v-img>
            </div>
            <div v-else>
              <v-img
                :src="`https://picsum.photos/500/300?image=${index * 5 + 10}`"
                lazy-src="@/assets/dummy.png"
              ></v-img>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-fade-transition>
    </v-container> -->

    <!-- <EmbbedTw :tweet-id="statuses[0].id_str"/> -->
    <!-- <Tweet id="1189045412914593792"></Tweet> -->

    

    <v-container fluid>
        <v-row 
          no-gutters
        >
          <v-col 
            cols="3"
            v-for="(str, index) in datas" 
            :key="index"
          >
            <v-card class="ma-1 pa-1">
              {{ str }}

              <!-- <Tweet :id="status.id_str" /></Tweet> -->
            </v-card>
          </v-col>
        </v-row>
    </v-container>
  </div>
</template>

<script>
import faunadb, { query as q } from "faunadb"
// import { Tweet } from 'vue-tweet-embed'

const faunaClient = new faunadb.Client({
  // secret: 'fnADvADPO7ACDageVtbFyG3SjkJeu5oo5NgNp2xH'
  secret: process.env.VUE_APP_FAUNA_KEY
})

export default {
  components: { 
    // Tweet 
  },
  data () {
    return {
      datas: null,
    }
  },
  created () {
    faunaClient.query(q.Map(
      q.Paginate(q.Match(q.Index('ids_sort_by_ref_desc')), { size: 1 }),
      q.Lambda('attr', q.Get(q.Var('attr')))
    ))
    .then((res) => {
      const idStrs = res.data[0].data.id_strings
      // 配列を分割
      const n = 8
      const splitIdStrs = idStrs.reduce(
        (acc, c, i) => i % n ? acc : [...acc, idStrs.slice(i, i + n)]
        , []
      )
      this.datas = splitIdStrs
    })
    // console.log(this.datas)
  }
}
</script>

<style>
</style>