<template>
  <v-container>
    <v-row>
      <v-col align="center" cols="12">
        <v-card max-width="25cm">
          <v-card-text>
            <template v-if="privacyPolicy">
              <nuxt-content :document="privacyPolicy"></nuxt-content>
            </template>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  auth: false,
  data() {
    return {
      privacyPolicy: false,
    }
  },
  mounted() {
    this.$content('privacy-policy')
      .fetch()
      .then((doc) => {
        console.log(doc.body)
        this.privacyPolicy = doc
      })
  },
}
</script>
<style scoped lang="less">
h2 {
  margin-bottom: 0.5cm;
  margin-top: 0.5cm;
}
.theme--dark {
  h2 {
    color: white !important;
  }
}
.theme--light {
  h2 {
    color: rgba(0, 0, 0, 0.87) !important;
  }
}
</style>
