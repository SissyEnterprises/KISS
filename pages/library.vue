<template>
  <v-container fluid>
    <v-app-bar fixed app dense>
      <v-tabs :show-arrows="false" color="primary" class="sis-hide-arrows">
        <v-tab>Librarian</v-tab>
        <v-tab>Facts</v-tab>
        <v-tab>Skills</v-tab>
      </v-tabs>
    </v-app-bar>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Library</v-card-title>
          <v-card-text>
            <p>Source of knowledge.</p>
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

<style>
.sis-hide-arrows .v-slide-group__prev {
  display: none !important;
}
</style>
