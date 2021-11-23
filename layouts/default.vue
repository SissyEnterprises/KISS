<template>
  <v-app class="vuesax-compat" @contextmenu.native.prevent>
    <Menubar v-if="$auth.loggedIn" />
    <v-main class="wp-main-background">
      <Nuxt> </Nuxt>
    </v-main>
  </v-app>
</template>
<script>
export default {
  mounted() {
    const unsubscribe = this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'stateLoaded') {
        this.$vuetify.theme.dark = this.$store.getters['general/themeDark']
        unsubscribe()
      }
    })
  },
}
</script>

<style>
.wp-main-background {
  background-size: cover;
  background-position: center;
}
</style>
