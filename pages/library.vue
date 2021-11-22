<template>
  <v-container>
    <v-app-bar fixed app dense color="#fff">
      <v-btn text>{{ $t('Tutorials') }}</v-btn>
      <v-btn text>{{ $t('Articles') }}</v-btn>
      <v-btn text>{{ $t('Facts') }}</v-btn>
    </v-app-bar>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <h1>Library</h1>
          </v-card-text>
        </v-card>
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
