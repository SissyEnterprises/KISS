<template>
  <v-container fluid class="ma-0 pa-0 fill-height">
    <v-app-bar fixed app dense color="#fff">
      <v-tabs
        :show-arrows="false"
        color="pink darken-1"
        class="sis-hide-arrows"
      >
        <v-tab>Courses</v-tab>
        <v-tab>Facts</v-tab>
        <v-tab>Skills</v-tab>
      </v-tabs>
    </v-app-bar>
    <v-row class="ma-0 pa-0 fill-height" no-gutters>
      <v-col align="center" cols="12">
        <Skilltree />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {}
  },
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
