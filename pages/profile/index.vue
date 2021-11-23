<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>General</v-card-title>
          <v-card-text>
            <p>General settings</p>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-card-title>Theme</v-card-title>
          <v-card-text>
            <v-switch
              v-model="theme"
              :label="$vuetify.theme.dark ? 'Dark' : 'Light'"
              color="pink darken-1"
              @change="changeTheme"
            ></v-switch>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      theme: this.$store.getters['general/themeDark'],
    }
  },
  mounted() {
    const unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'stateLoaded') {
        this.theme = this.$store.getters['general/themeDark']
        this.$vuetify.theme.dark = this.$store.getters['general/themeDark']
        unsubscribe()
      }
    })
  },
  methods: {
    changeTheme(state) {
      if (state) {
        this.$store.commit('general/setThemeDark', true)
        this.$vuetify.theme.dark = this.$store.getters['general/themeDark']
      } else {
        this.$store.commit('general/setThemeDark', false)
        this.$vuetify.theme.dark = this.$store.getters['general/themeDark']
      }
    },
  },
}
</script>
