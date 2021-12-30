<template>
  <v-container fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" align="center">
        <v-stepper v-model="step" vertical style="max-width: 25cm">
          <v-stepper-step :complete="step > 1" step="1" color="primary">
            {{ $t('Prerequisites') }}
            <small>{{ $t('Preparations and requirements') }}</small>
          </v-stepper-step>

          <v-stepper-content step="1">
            <v-card class="mb-12" min-height="200px">
              <v-card-text>
                <p>
                  In order to enter K.I.S.S. you are going to need to do a
                  couple of things first.
                </p>
                <v-checkbox
                  v-model="step1.above18"
                  color="primary"
                  label="Are you above the age of 18?"
                  hint="This app really, really isn't suitable for users below the age of 18."
                  persistent-hint
                ></v-checkbox>
                <v-checkbox
                  v-model="step1.createdAccount"
                  color="primary"
                  label="Create Google account"
                  hint="If you already have one you can certainly use it, but be aware of the potential security risks and unwanted attention that may be attracted to the account you decide to use."
                  persistent-hint
                ></v-checkbox>
              </v-card-text>
            </v-card>

            <v-btn
              :disabled="!step1.above18 || !step1.createdAccount"
              color="primary"
              @click="step = 2"
            >
              Continue
            </v-btn>

            <v-btn text :to="localePath('index')" color="primary">
              {{ $t('Cancel') }}
            </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="step > 2" step="2" color="primary">
            {{ $t('Privacy Policy') }}
            <small>{{ $t('Information about your personal data') }}</small>
          </v-stepper-step>

          <v-stepper-content step="2">
            <v-card
              class="mb-12 overflow-y-auto"
              min-height="200px"
              max-height="500px"
            >
              <v-card-text>
                <template v-if="privacyPolicy">
                  <nuxt-content :document="privacyPolicy"></nuxt-content>
                </template>
              </v-card-text>
            </v-card>

            <v-checkbox
              v-model="step2.privacyPolicy"
              color="primary"
              label="Have you read and agree to the Privacy Policy?"
              hint="Don't be like Kyle, read the fine print."
              persistent-hint
            ></v-checkbox>
            <v-btn
              :disabled="!step2.privacyPolicy"
              color="primary"
              @click="step = 3"
            >
              {{ $t('Continue') }}
            </v-btn>

            <v-btn text color="primary" @click="step = 1">
              {{ $t('Cancel') }}
            </v-btn>
          </v-stepper-content>

          <v-stepper-step :complete="step > 3" step="3" color="primary">
            {{ $t('Grant permissions') }}
            <small>{{
              $t("You gotta invite us in, we're like vampires!")
            }}</small>
          </v-stepper-step>

          <v-stepper-content step="3">
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
                <v-btn @click="step3.showDialog = true"
                  >Why do you need these permissions?</v-btn
                >
                <v-checkbox
                  v-model="step3.understand"
                  color="primary"
                  label="I understand what it means to grant these permissions"
                ></v-checkbox>
                <v-btn
                  :disabled="!step3.understand"
                  block
                  large
                  color="primary"
                  @click="grantPermissions"
                  >{{ $t('Grant permissions') }}</v-btn
                >
              </v-card-text>
            </v-card>

            <v-btn
              :disabled="!step3.understand || !step3.granted"
              color="primary"
              @click="step = 4"
            >
              Continue
            </v-btn>

            <v-btn text color="primary" @click="step = 2">
              {{ $t('Previous') }}
            </v-btn>
          </v-stepper-content>

          <v-stepper-step step="4" color="primary">
            {{ $t('Finalize') }}
            <small>{{ $t('Summary of your settings') }}</small>
          </v-stepper-step>

          <v-stepper-content step="4">
            <v-card class="mb-12">
              <v-card-text>
                <p>Thank you for joining!</p>
                <p>
                  Here's a summary of the settings your account is being set up
                  with. (WIP)
                </p>
                <v-simple-table v-if="false">
                  <template #default>
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

            <v-btn color="primary" @click="finalize"> Log in </v-btn>

            <v-btn color="primary" text @click="step = 3">
              {{ $t('Previous') }}
            </v-btn>
          </v-stepper-content>
        </v-stepper>
      </v-col>
    </v-row>
    <v-dialog v-model="step3.showDialog" max-width="20cm">
      <v-card>
        <v-card-title>Permissions</v-card-title>
        <v-card-text>
          <p>
            This project is aiming at being completely serverless. As such, we
            need somewhere to store progress and settings that doesn't put them
            on any centralized servers.
          </p>
          <p>
            Your browser has the ability to store small pieces of information
            across sessions called cookies. They can however be easily wiped and
            aren't transferred between browsers.
          </p>
          <p>
            In comes Google Drive! The permission scope we request to your
            Google Drive is specifically only to the Application scope.
          </p>
          <p>
            What is the Application scope in Google Drive? It's basically a
            hidden folder that apps can use, without requiring access to your
            personal files.
          </p>
          <p>
            In other words, the Google Drive permission is in no way a security
            risk, because all we ask for is permission for the app to access its
            own folder, and nothing else.
          </p>
          <p>
            We may require more permissions later for other tools, but nothing
            else should be required for the base functionality. We might want
            access to things like your gmail in order to allow the app to send
            emails without requiring a server, because again the app is
            radically serverless in its approach.
          </p>
          <p>
            If we develop new features that require more permissions later the
            Privay Policy will be updated and you will have to explicitly grant
            elevated privileges before any such changes take effect.
          </p>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  auth: false,
  layout: 'start',
  data() {
    return {
      privacyPolicy: null,
      step: 1,
      step1: {
        above18: false,
        createdAccount: false,
      },
      step2: {
        privacyPolicy: false,
      },
      step3: {
        showDialog: false,
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
  mounted() {
    this.$content('privacy-policy')
      .fetch()
      .then((doc) => {
        this.privacyPolicy = doc
      })
  },
  methods: {
    grantPermissions() {
      this.$gapi.login()
      this.step3.granted = true
    },
    finalize() {
      this.$auth.loginWith('google').then(() => {
        this.$router.push('school')
      })
    },
  },
}
</script>
