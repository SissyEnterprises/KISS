<template>
  <v-container class="fill-height">
    <v-row class="fill-height" align="center">
      <v-col align="center">
        <v-card max-width="13cm">
          <v-card-text>
            <h1
              style="margin-top: 1cm; padding-bottom: 0.5cm"
              class="text-center"
            >
              Hey girl!
            </h1>
            <p>Welcome to your journey into sissyhood!</p>
            <div style="margin-top: 1cm; margin-bottom: 1cm">
              <v-btn
                :to="localePath('get-started')"
                x-large
                rounded
                color="green"
                >{{ $t('Get started') }}</v-btn
              >
              <v-btn x-large rounded @click="login">{{ $t('Log in') }}</v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
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
      // API Key
      // AIzaSyBomLRdD6gwfnfOTc-XrXg3z1lNdz10TAs
      // Client ID
      // 177245628514-lu7v4lfvkp01hmtnr12h2g4j4o56im8v.apps.googleusercontent.com
      // Client Secret
      // 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

      this.$auth.loginWith('google')
      /*

      this.$gapi.login().then(({ currentUser, gapi, hasGrantedScopes }) => {
        gapi.load('drive', 'v3')
        const parentId = 'appDataFolder' // some parentId of a folder under which to create the new folder
        const fileMetadata = {
          name: 'config.json',
          mimeType: 'application/json',
          parents: [parentId],
          body: '{"hello":"world"}',
        }
        gapi.client.drive.files
          .create({
            resource: fileMetadata,
          })
          .then((data) => {
            gapi.client.drive.files
              .list({
                spaces: 'appDataFolder',
                pageSize: 10,
                fields: 'nextPageToken, files(id, name)',
              })
              .then((data) => {
                this.$router.replace(this.localePath('schedule'))
              })
          })
      })
*/
    },
  },
}
</script>
