<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <h1>Roulette</h1>
            <p>
              A simple tool for playing fap roulettes. Pick an image, roll for
              numbers, do what it says. Simple!
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
