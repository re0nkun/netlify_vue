<template>
  <v-app>
    <v-app-bar 
      app
      light
      flat
      hide-on-scroll
      color="grey lighten-3"
    >
      <v-toolbar-title>
        <router-link to="/" class="toolbar-title">
          #Vuetify
        </router-link>
      </v-toolbar-title>
      
      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text to="/enterprise">For Enterprise</v-btn>
        <v-btn text>Support</v-btn>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" text>
              Support<v-icon>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-subheader>Get help</v-subheader>
            <v-list-item v-for="support in supports" :key="support.name" :to="support.link">
              <v-list-item-icon>
                <v-icon>{{support.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{support.name}}</v-list-item-title>
              </v-list-item-content>        
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar-items>    
    </v-app-bar>

    <v-content class="grey lighten-3">
      <router-view/>
    </v-content>
    
    <!-- <v-footer color="primary" dark app>
      Vuetify
    </v-footer> -->
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      supports: [
        {
          name: 'Consulting and suppourt',
          icon: 'mdi-vuetify',
          link: '/consulting-and-support'
        },
        {
          name: 'Discord community',
          icon: 'mdi-discord',
          link: '/discord-community'
        },
        {
          name: 'Report a bug',
          icon: 'mdi-bug',
          link: '/report-a-bug'
        },
        {
          name: 'Github issue board',
          icon: 'mdi-github',
          link: '/guthub-issue-board'
        },
        {
          name: 'Stack overview',
          icon: 'mdi-stack-overflow',
          link: '/stack-overview'
        },
      ]
    }
  }
};
</script>

<style scoped>
.toolbar-title {
  color: inherit;
  text-decoration: inherit;
}
</style>