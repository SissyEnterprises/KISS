<template>
  <v-app class="vuesax-compat" @contextmenu.native.prevent>
    <Menubar v-if="$auth.loggedIn" />
    <v-main class="wp-start-background">
      <Nuxt> </Nuxt>
    </v-main>
  </v-app>
</template>
<script>
export default {
  mounted() {},
}
</script>

<style scoped>
.wp-start-background {
  background-image: url('~/assets/images/pages/index/background.webp');
  background-size: cover;
  background-position: center;
}
</style>
