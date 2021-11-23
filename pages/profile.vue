<template>
  <v-container>
    <v-app-bar fixed app dense>
      <v-tabs
        :show-arrows="false"
        color="pink darken-1"
        class="sis-hide-arrows"
      >
        <v-tab exact :to="localePath('profile')">General</v-tab>
        <v-tab exact :to="localePath('profile-danger')">Danger zone</v-tab>
      </v-tabs>
    </v-app-bar>
    <v-row no-gutters>
      <v-col cols="12">
        <nuxt></nuxt>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [...i18nHead.meta],
      link: [...i18nHead.link],
    }
  },
}
</script>

<style>
.sis-hide-arrows .v-slide-group__prev {
  display: none !important;
}
</style>
