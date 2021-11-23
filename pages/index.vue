<template>
  <v-container class="fill-height">
    <v-row class="fill-height" align="center">
      <v-col align="center">
        <v-card max-width="13cm" shaped>
          <v-container fluid class="pa-0 ma-0 fill-height">
            <v-row no-gutters align="center" justify="center">
              <v-col align="center">
                <h1
                  style="margin-top: 1cm; padding-bottom: 0.5cm"
                  class="text-center"
                >
                  K.I.S.S.
                </h1>
                <p>Kink Institute and Sex School</p>
                <p class="red--text">Super early pre-alpha</p>
                <div style="margin-top: 1cm; margin-bottom: 1cm">
                  <v-btn
                    :to="localePath('get-started')"
                    large
                    rounded
                    color="primary"
                    >{{ $t('Get started') }}</v-btn
                  >
                  <v-btn large rounded @click="login">{{ $t('Log in') }}</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'start',
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
  methods: {
    login() {
      this.$auth.loginWith('google')
    },
  },
}
</script>
