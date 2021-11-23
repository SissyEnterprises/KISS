<template>
  <v-container>
    <v-row>
      <v-col>
        <v-stepper v-model="step" vertical>
          <v-stepper-step :complete="step > 1" step="1" color="pink darken-1">
            {{ $t('Prerequisites') }}
            <small>{{ $t('Preparations and requirements') }}</small>
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-card class="mb-12" min-height="200px">
              <v-card-text>
                <p>
                  In order to use the Sissy App you are going to need to do a
                  couple of things first.
                </p>
                <v-checkbox
                  v-model="step1.above18"
                  color="pink darken-1"
                  label="Are you above the age of 18?"
                  hint="This app really, really isn't suitable for users below the age of 18."
                  persistent-hint
                ></v-checkbox>
                <v-checkbox
                  v-model="step1.createdAccount"
                  color="pink darken-1"
                  label="Create Google account"
                  hint="If you already have one you can certainly use it, but be aware of the potential security risks and unwanted attention that may be attracted to the account you decide to use."
                  persistent-hint
                ></v-checkbox>
              </v-card-text>
            </v-card>

            <v-btn
              :disabled="!step1.above18 || !step1.createdAccount"
              color="pink darken-1"
              @click="step = 2"
            >
              Continue
            </v-btn>

            <v-btn text :to="localePath('index')" color="pink darken-1">
              {{ $t('Cancel') }}
            </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="step > 2" step="2" color="pink darken-1">
            {{ $t('Grant permissions') }}
            <small>{{
              $t("You gotta invite us in, we're like vampires!")
            }}</small>
          </v-stepper-step>

          <v-stepper-content step="2">
            <v-card class="mb-12">
              <v-card-text>
                <p>
                  Press the button below to log into your Google account and
                  grant us the proper permissions.
                </p>
                <p>
                  If we already have the proper permissions you'll just see a
                  window pop up and disappear.
                </p>
                <v-checkbox
                  v-model="step2.understand"
                  color="pink darken-1"
                  label="I understand what it means to grant these permissions"
                ></v-checkbox>
                <v-btn
                  :disabled="!step2.understand"
                  block
                  x-large
                  color="pink darken-1"
                  @click="grantPermissions"
                  >{{ $t('Grant permissions') }}</v-btn
                >
              </v-card-text>
            </v-card>

            <v-btn
              :disabled="!step2.understand || !step2.granted"
              color="pink darken-1"
              @click="step = 3"
            >
              Continue
            </v-btn>

            <v-btn text color="pink darken-1" @click="step = 1">
              {{ $t('Previous') }}
            </v-btn>
          </v-stepper-content>

          <v-stepper-step step="3" color="pink darken-1">
            {{ $t('Finalize') }}
            <small>{{ $t('Summary of your settings') }}</small>
          </v-stepper-step>

          <v-stepper-content step="3">
            <v-card class="mb-12">
              <v-card-text>
                <p>Thank you for joining!</p>
                <p>
                  Here's a summary of the settings your account is being set up
                  with. (WIP)
                </p>
                <v-simple-table v-if="false">
                  <template>
                    <tbody>
                      <tr>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card-text>
            </v-card>

            <v-btn color="pink darken-1" @click="finalize"> Log in </v-btn>

            <v-btn color="pink darken-1" text @click="step = 2">
              {{ $t('Previous') }}
            </v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  auth: false,
  layout: 'start',
  data() {
    return {
      step: 1,
      step1: {
        above18: false,
        createdAccount: false,
      },
      step2: {
        understand: false,
        granted: false,
      },
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
    grantPermissions() {
      this.$gapi.login()
      this.step2.granted = true
    },
    finalize() {
      this.$auth.loginWith('google').then(() => {
        this.$router.push('schedule')
      })
    },
  },
}
</script>
