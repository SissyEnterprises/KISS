import VuexPersistence from 'vuex-persist'
import * as localforage from 'localforage'
import Vue from 'vue'

export const state = () => ({
  stateLoaded: false,
})

export const getters = {
  stateLoaded: (state) => {
    return state.stateLoaded
  },
}

export const mutations = {
  stateLoaded(state, payload) {
    state.stateLoaded = payload
  },
}

export const actions = {
  async stateLoaded(context, payload) {
    await context.commit('stateLoaded', true)
  },
}

// TODO: Create new storage that also keeps the state in Google Drive

// export interface LocalForage {
//   getItem<T>(key: string): Promise<T>
//   setItem<T>(key: string, data: T): Promise<T>
//   removeItem(key: string): Promise<void>
//   clear(): Promise<void>
//   length(): Promise<number>
//   key(keyIndex: number): Promise<string>
//   _config?: {
//     name: string
//   }
// }

class DriveStorage {
  async getItem(key) {
    return await localforage.getItem(key)
  }

  async setItem(key, data) {
    // console.log('WTF: ', key, ' ', data)

    // eslint-disable-next-line no-unused-vars
    const _ = new Promise((resolve, reject) => {
      /*
      $nuxt.$gapi.clientProvider.client.gapi.client.drive.files.list({
  spaces: 'appDataFolder',
  fields: 'nextPageToken, files(id, name, webContentLink, webViewLink)',
  pageSize: 100
}).then((list)=>{
  files = JSON.parse(list.body).files
files.forEach((val)=>{


gapi.client.drive.files.get(
    {fileId: val.id, alt: 'media'}).then((res)=>{
console.log(res)
})

})
})
       */

      Vue.prototype.$gapi.clientProvider.client.gapi.client.drive.files
        .create({
          resource: {
            name: 'state.json',
            parents: ['appDataFolder'],
          },
          media: {
            mimeType: 'application/json',
            body: JSON.stringify(data),
          },
          fields: 'id',
        })
        .then((res) => {
          // console.log('Upload: ', res)

          Vue.prototype.$gapi.clientProvider.client.gapi.client.drive.files
            .list({
              spaces: 'appDataFolder',
              fields: 'nextPageToken, files(id, name)',
              pageSize: 100,
            })
            .then((res) => {
              // console.log(JSON.parse(res.body))
              resolve()
            })
        })
    })
    return await localforage.setItem(key, data)
  }

  async removeItem(key) {
    return await localforage.removeItem(key)
  }

  async clear() {
    return await localforage.clear()
  }

  async length() {
    return await localforage.length()
  }

  async key(keyIndex) {
    return await localforage.key(keyIndex)
  }

  get _config() {
    return localforage.config()
  }
}

const version = process.env.version ? process.env.version : '0'
const vuexLocal = new VuexPersistence({
  storage: new DriveStorage(),
  supportCircular: true,
  asyncStorage: true,
  key: 'state-' + version,
  modules: ['general'],
})

export const plugins = [vuexLocal.plugin]
