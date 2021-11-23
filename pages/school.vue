<template>
  <v-container fluid>
    <v-app-bar fixed app dense>
      <v-tabs
        :show-arrows="false"
        color="pink darken-1"
        class="sis-hide-arrows"
      >
        <v-tab exact :to="localePath('school')">Map</v-tab>
        <v-tab exact :to="localePath('school-faculty')">Faculty</v-tab>
        <v-tab exact :to="localePath('school-students')">Students</v-tab>
      </v-tabs>
    </v-app-bar>
    <v-row>
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
