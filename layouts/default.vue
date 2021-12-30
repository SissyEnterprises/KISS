<template>
  <v-app class="vuesax-compat" @contextmenu.native.prevent>
    <Menubar v-if="$auth.loggedIn" />
    <v-main class="wp-main-background">
      <Nuxt> </Nuxt>
    </v-main>
    <v-btn fab fixed right bottom>
      <v-avatar>
        <v-img
          :src="require('~/assets/characters/counsellor/avatar.webp')"
        ></v-img>
      </v-avatar>
    </v-btn>
    <v-speed-dial
      v-model="fab"
      fixed
      right
      bottom
      direction="top"
      open-on-hover
    >
      <template #activator>
        <v-btn v-model="fab" color="green" fab dark>
          <v-icon> fas fa-phone </v-icon>
        </v-btn>
      </template>
      <v-btn fab @click="calling = true">
        <v-avatar size="57">
          <v-img
            :src="require('~/assets/characters/student-1/avatar.jpg')"
          ></v-img>
        </v-avatar>
      </v-btn>
      <v-btn fab @click="calling = true">
        <v-avatar size="57">
          <v-img
            :src="require('~/assets/characters/counsellor/avatar.webp')"
          ></v-img>
        </v-avatar>
      </v-btn>
    </v-speed-dial>
    <!-- Phone call -->
    <v-dialog v-model="calling" persistent max-width="10cm">
      <v-card>
        <v-img
          max-height="10cm"
          :src="require('~/assets/characters/counsellor/avatar.webp')"
        ></v-img>
        <v-card-title
          ><span class="fill-width text-center"
            >Guidance Counsellor</span
          ></v-card-title
        >
        <v-card-subtitle
          ><span class="fill-width text-center d-inline-block"
            >Pick up your phone!</span
          ></v-card-subtitle
        >
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn fab color="red" @click="calling = false">
            <v-icon>fas fa-times</v-icon>
          </v-btn>
          <v-btn fab @click="calling = false">
            <v-icon>fas fa-arrow-down</v-icon>
          </v-btn>
          <v-btn
            fab
            color="green"
            @click="
              () => {
                talking = true
                calling = false
              }
            "
          >
            <v-icon>fas fa-check</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- Conversation -->
    <v-dialog v-model="talking" persistent max-width="25cm">
      <v-card>
        <v-card-text class="ma-0 pa-0">
          <v-container fluid class="ma-0 pa-0">
            <v-row no-gutters>
              <v-col cols="12" sm="6" align="center">
                <v-img
                  height="10cm"
                  :src="require('~/assets/characters/counsellor/avatar.webp')"
                ></v-img>
              </v-col>
              <v-col cols="12" sm="6">
                <div class="pa-4">
                  <h1 style="padding-bottom: 0.5cm">Guidance Counsellor</h1>
                  <p>Hi there!</p>
                  <p>I am your new guidance counsellor. Pleased to meet you!</p>
                  <p>
                    I'll be trying to learn more about you so I can give you the
                    best advise as possible and help you achieve your goals!
                  </p>
                  <p>So, lets get started!</p>
                  <p>
                    Do you consider yourself more of a dominant or a submissive
                    person?
                  </p>
                </div>
                <v-btn text block @click="talking = false">1. Dominant</v-btn>
                <v-btn text block @click="talking = false">2. Submissive</v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      fab: false,
      calling: false,
      talking: false,
    }
  },
  mounted() {},
}
</script>

<style scoped>
.wp-main-background {
  background-size: cover;
  background-position: center;
}
</style>
