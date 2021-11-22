<template>
  <v-container>
    <v-row>
      <v-col>
        <v-stepper v-model="step" vertical>
          <v-stepper-step :complete="step > 1" step="1">
            {{ $t('Prerequisites') }}
            <small>{{ $t('Preparations and requirements') }}</small>
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-card class="mb-12" color="grey lighten-2" min-height="200px">
              <v-card-text>
                <p>
                  In order to use the Sissy App you are going to need to do a
                  couple of things first.
                </p>
                <v-checkbox
                  label="Are you above the age of 18?"
                  hint="This app really, really isn't suitable for users below the age of 18."
                  persistent-hint
                ></v-checkbox>
                <v-checkbox
                  label="Create Google account"
                  hint="If you already have one you can certainly use it, but be aware of the potential security risks and unwanted attention that may be attracted to the account you decide to use."
                  persistent-hint
                ></v-checkbox>
              </v-card-text>
            </v-card>

            <v-btn color="primary" @click="step = 2"> Continue </v-btn>

            <v-btn text :to="localePath('index')"> {{ $t('Cancel') }} </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="step > 2" step="2">
            {{ $t('Log in') }}
            <small>{{
              $t("You gotta invite us in, we're like vampires!")
            }}</small>
          </v-stepper-step>

          <v-stepper-content step="2">
            <v-card class="mb-12" color="grey lighten-2">
              <v-card-text>
                <p>Press the button below to log into your Google account.</p>
              </v-card-text>
              <v-card-actions>
                <v-btn block x-large @click="$gapi.login()">{{
                  $t('Log in')
                }}</v-btn>
              </v-card-actions>
            </v-card>

            <v-btn color="primary" @click="step = 3"> Continue </v-btn>

            <v-btn text @click="step = 1"> {{ $t('Previous') }} </v-btn>
          </v-stepper-content>

          <v-stepper-step step="3">
            {{ $t('Finalize') }}
            <small>{{ $t('Summary of your settings') }}</small>
          </v-stepper-step>

          <v-stepper-content step="3">
            <v-card
              class="mb-12"
              color="grey lighten-2"
              height="200px"
            ></v-card>

            <v-btn color="primary" @click="finalize"> Continue </v-btn>

            <v-btn text @click="step = 2"> {{ $t('Previous') }} </v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      step: 1,
    }
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
    finalize() {},
  },
}
</script>
