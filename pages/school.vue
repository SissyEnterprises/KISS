<template>
  <v-container fluid>
    <v-app-bar fixed app dense>
      <v-tabs
        :show-arrows="false"
        color="pink darken-1"
        class="sis-hide-arrows"
      >
        <v-tab>Map</v-tab>
        <v-tab>Faculty</v-tab>
        <v-tab>Students</v-tab>
      </v-tabs>
    </v-app-bar>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>School</v-card-title>
          <v-card-text>
            <p>I will create a map here of the school.</p>
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
