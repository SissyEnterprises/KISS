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
// background-image: url('~/assets/images/pages/index/background.jpg');
</script>

<style scoped>
.wp-start-background {
  background-image: url('https://cdn.wallpapersafari.com/1/22/8kIjEY.gif');
  background-size: cover;
  background-position: center;
}
</style>
