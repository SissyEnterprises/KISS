import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify)

const opts = {
  icons: {
    iconfont: 'fa', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
  customProperties: true,
  variations: true,
  theme: {
    themes: {
      dark: {
        primary: '#030f40',
        black: '#171717',
        info: '#2196f3',
        warning: '#ffbc00',
        error: '#ff5252',
        anchor: '#2196f3',
      },
      light: {
        primary: '#030f40',
        black: '#171717',
        info: '#2196f3',
        warning: '#ffbc00',
        error: '#ff5252',
        anchor: '#2443cd',
      },
    },
  },
  breakpoint: {
    thresholds: {
      xs: 600,
      sm: 950,
      md: 1264,
      lg: 1904,
    },
  },
}

export default new Vuetify(opts)
