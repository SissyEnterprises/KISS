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
  mounted() {},
}
</script>

<style>
.wp-main-background {
  background: url('~/assets/images/pages/index/background.jpg');
  background-size: cover;
  background-position: center;
}
</style>
