import Vue from 'vue'
import VueGapi from 'vue-gapi'
import { LocalScheme } from '~auth/runtime'

Vue.use(VueGapi, {
  apiKey: 'AIzaSyBomLRdD6gwfnfOTc-XrXg3z1lNdz10TAs',
  clientId:
    '177245628514-lu7v4lfvkp01hmtnr12h2g4j4o56im8v.apps.googleusercontent.com',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
  scope:
    'https://www.googleapis.com/auth/drive https://www.googleapis.com/auth/drive.appdata',
})
export default class CustomScheme extends LocalScheme {
  // Override `fetchUser` method of `local` scheme

  // eslint-disable-next-line require-await
  async login(endpoint) {
    await Vue.prototype.$gapi.login()
    await this.$auth.fetchUser()
    this.$auth.$storage.setState('loggedIn', true)
  }

  // eslint-disable-next-line require-await
  async logout(endpoint) {
    await Vue.prototype.$gapi.logout()
    this.$auth.reset()
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
