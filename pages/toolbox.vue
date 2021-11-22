<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <h1>Censor (not yet ready)</h1>
            <p>
              This is a tool that when run will detect various kinds of visuals
              on your screen and attempt to censor them.
            </p>
            <p>
              Sound boring? Well, the visuals used for censoring can be a lot of
              different things.
            </p>
            <p>
              For example, imagine you're browsing your favorite porn site. Look
              at all those pretty boobs... Oh wait, you can't, because they've
              all been replaced by delicious cocks!
            </p>
            <p>
              The tool comes in two flavors, closeted and outed (recommended).
            </p>
            <p>
              The closeted flavor will make very attempt to hide its existence
              from the user and comes preconfigured with settings that attempt
              to make its effects gradual and subliminal. The end goal of this
              flavor is to assist dominants in sissifying their partner, just
              like in your favorite erotica.
            </p>
            <p>
              The outed flavor makes no attempts at hiding itself from the user
              and comes preconfigured with more overtly sexual content.
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
