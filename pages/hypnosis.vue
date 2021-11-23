<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <h1>Hypnosis</h1>
            <p>
              A tool for hypnosis, creating binaural waves, spirals, generating
              audio from text input, the works!
            </p>
            <p>
              This tool isn't intended to be used with actual dominas, you
              essentially have a virtual domina that we'll use Amazon Polly to
              generate voice files for, but support for actual domina recordings
              is gonna be added as well, it's just not the primary goal of the
              tool.
            </p>
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
