<template>
  <v-container fluid>
    <v-row>
      <v-col>
        <v-card>
          <v-card-text>
            <v-text-field
              prepend-inner-icon="fas fa-search"
              label="Search"
              outlined
            ></v-text-field>
            <v-row>
              <v-col>
                <v-slider label="Duration"></v-slider>
              </v-col>
              <v-col>
                <v-select label="Categories" outlined hide-details></v-select>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>Recommended</v-card-title>
          <v-card-text>
            <v-slide-group show-arrows>
              <v-slide-item v-for="n in 15" :key="n">
                <v-card min-height="200" width="250" class="ma-4" @click.stop>
                  <v-img
                    src="https://ei.phncdn.com/videos/202002/11/283679742/original/(m=eaAaGwObaaaa)(mh=9R68lY5iwM5Fa3v6)6.jpg"
                  ></v-img>
                  <v-card-title style="font-size: 17px">
                    Sexy title {{ n }}
                  </v-card-title>
                  <v-card-subtitle style="padding-bottom: 0"
                    >5:32</v-card-subtitle
                  >
                  <v-row no-gutters>
                    <v-col align="right">
                      <v-chip class="ma-2" color="green"> Seen </v-chip>
                    </v-col>
                  </v-row>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title>Latest</v-card-title>
          <v-card-text>
            <v-slide-group show-arrows>
              <v-slide-item v-for="n in 15" :key="n">
                <v-card min-height="200" width="250" class="ma-4" @click.stop>
                  <v-img
                    src="https://ei.phncdn.com/videos/202002/11/283679742/original/(m=eaAaGwObaaaa)(mh=9R68lY5iwM5Fa3v6)6.jpg"
                  ></v-img>
                  <v-card-title style="font-size: 17px">
                    Sexy title {{ n }}
                  </v-card-title>
                  <v-card-subtitle style="padding-bottom: 0"
                    >5:32</v-card-subtitle
                  >
                  <v-row no-gutters>
                    <v-col align="right">
                      <v-chip class="ma-2" color="green"> Seen </v-chip>
                    </v-col>
                  </v-row>
                </v-card>
              </v-slide-item>
            </v-slide-group>
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
