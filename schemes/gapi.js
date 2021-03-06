import Vue from 'vue'
import VueGapi from 'vue-gapi'
import { LocalScheme } from '~auth/runtime'

Vue.use(VueGapi, {
  apiKey: process.env.GCP_API_KEY,
  clientId: process.env.GCP_CLIENT_ID,
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
  scope: 'https://www.googleapis.com/auth/drive.appdata',
})

export default class CustomScheme extends LocalScheme {
  async login(endpoint) {
    await Vue.prototype.$gapi.login()
    await this.$auth.fetchUser()
    this.$auth.$storage.setState('loggedIn', true)
    // Workaround for getter too slow for vuex-persist
    window.location.reload()
  }

  // eslint-disable-next-line require-await
  async logout(endpoint) {
    await Vue.prototype.$gapi.logout()
    this.$auth.reset()
    // Workaround for getter too slow for vuex-persist
    window.location.reload()
  }

  check() {
    return true
  }

  // eslint-disable-next-line require-await
  async fetchUser(endpoint) {
    const res = await Vue.prototype.$gapi.getCurrentUser()
    const profile = res.getBasicProfile()
    const user = {
      name: profile.getName(),
      avatar: profile.getImageUrl(),
    }
    this.$auth.setUser(user)
    this.$auth.$storage.setState('loggedIn', true)
    return Promise.resolve()
  }
}
