<template>
  <v-container fluid class="ma-0 pa-0 fill-height">
    <v-app-bar fixed app dense color="#fff">
      <v-btn text>{{ $t('Courses') }}</v-btn>
      <v-btn text>{{ $t('Facts') }}</v-btn>
      <v-btn text>{{ $t('Skills') }}</v-btn>
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
