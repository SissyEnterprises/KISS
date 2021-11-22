<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <h1>Dildo hero</h1>
            <p>
              The trainer is a tool for setting up videos similar to one of your
              favorite kind of videos: Dildo Hero (dildo optional)!
            </p>
            <p>
              The idea is simple. Load up your favorite playlist using either
              links or file uploads. Check what kind of hero you want to be,
              dildo hero, buttplug hero, fap hero, you name it. We called it
              dildo hero because we know that's your preferred mode. ;)
            </p>
            <p>
              Select the type of material you wish to see and we'll take care of
              analysing (hehe anal) the music to find its beat. Then we apply a
              pretty basic algorithm to make it get harder the further you go,
              and presto!
            </p>
            <ol>
              <li>
                Set up a source, either an Audio+Video or a plain Video source.
                Audio+Video allows you to configure one source for the audio,
                then multiple video sources that are played for the duration of
                the audio. With a plain Video source both audio and video is
                used from a single source. Note that if you pick a Video source
                with a lot of moaning it can really mess up the beat detector.
              </li>
            </ol>
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
