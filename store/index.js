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
  async setupDrive() {
    const self = this
    // await new Promise((resolve) => setTimeout(resolve, 150))
    // return false
    // eslint-disable-next-line no-unused-vars
    // await new Promise((resolve) => setTimeout(resolve, 200))
    // eslint-disable-next-line no-unreachable
    if (!self.initialized) {
      // await Vue.prototype.$gapi.getGapiClient()
      // eslint-disable-next-line no-unreachable
      return await new Promise((resolve, reject) => {
        Vue.prototype.$gapi.clientProvider.client.gapi.client.drive.files
          .list({
            q: 'name="state.json"',
            spaces: 'appDataFolder',
            fields: 'files(id)',
          })
          .then(async (data) => {
            // Creating a file if none is found, otherwise just continuing
            if (data.result.files.length === 0) {
              await Vue.prototype.$gapi.clientProvider.client.gapi.client.drive.files.create(
                {
                  resource: {
                    name: 'state.json',
                    parents: ['appDataFolder'],
                  },
                  fields: 'id',
                }
              )
            } else if (data.result.files.length > 1) {
              data.result.files
                .filter((val, index, array) => index > 0)
                .forEach((file) => {
                  // eslint-disable-next-line no-unused-vars
                  Vue.prototype.$gapi.clientProvider.client.gapi.client.drive.files.delete(
                    {
                      fileId: file.id,
                    }
                  )
                })
            }
            return data.result.files[0].id
          })
          .then((stateFileId) => {
            self.stateFileId = stateFileId
            // Get the current state file
            Vue.prototype.$gapi.clientProvider.client.gapi.client.drive.files
              .get({
                fileId: self.stateFileId,
                alt: 'media',
              })
              .then((data) => {
                if (!data.result) {
                  // The file was false, make it an empty json
                  Vue.prototype.$gapi.clientProvider.client.gapi.client
                    .request({
                      path: '/upload/drive/v3/files/' + self.stateFileId,
                      method: 'PATCH',
                      params: {
                        uploadType: 'media',
                      },
                      body: JSON.stringify({}),
                    })
                    .then((data) => {
                      resolve()
                    })
                    .catch((e) => {
                      reject(e)
                    })
                } else {
                  resolve()
                }
              })
          })
          .catch((e) => {
            reject(e)
          })
      })
        .then(() => {
          self.initialized = true
          return true
        })
        .catch((e) => {
          return false
        })
      // eslint-disable-next-line no-unreachable
    } else {
      return Vue.prototype.$gapi.isAuthenticated()
    }
  }

  async getItem(key) {
    const self = this
    if (!(await self.setupDrive())) {
      return await localforage.getItem(key)
    }
    // eslint-disable-next-line no-unreachable
    return await new Promise((resolve, reject) => {
      Vue.prototype.$gapi.clientProvider.client.gapi.client.drive.files
        .get({
          fileId: self.stateFileId,
          alt: 'media',
        })
        .then(async (data) => {
          if (key in data.result) {
            await localforage.setItem(key, data.result[key])
            resolve(data.result[key])
          } else {
            resolve(await localforage.getItem(key))
          }
        })
        .catch((e) => {
          reject(e)
        })
    })
  }

  async setItem(key, value) {
    const self = this
    if (!(await this.setupDrive())) {
      return await localforage.setItem(key, value)
    }
    await localforage.setItem(key, value)
    // eslint-disable-next-line no-unreachable
    return await Vue.prototype.$gapi.clientProvider.client.gapi.client.drive.files
      .get({
        fileId: self.stateFileId,
        alt: 'media',
      })
      .then(async (data) => {
        data.result[key] = value
        // The file was false, make it an empty json
        await Vue.prototype.$gapi.clientProvider.client.gapi.client
          .request({
            path: '/upload/drive/v3/files/' + self.stateFileId,
            method: 'PATCH',
            params: {
              uploadType: 'media',
            },
            body: JSON.stringify(data.result),
          })
          .then(() => {
            return value
          })
      })
  }

  async removeItem(key) {
    const self = this
    if (!(await this.setupDrive())) {
      return await localforage.removeItem(key)
    }
    await localforage.removeItem(key)
    return await Vue.prototype.$gapi.clientProvider.client.gapi.client.drive.files
      .get({
        fileId: self.stateFileId,
        alt: 'media',
      })
      .then((data) => {
        delete data.result[key]
        // The file was false, make it an empty json
        Vue.prototype.$gapi.clientProvider.client.gapi.client.request({
          path: '/upload/drive/v3/files/' + self.stateFileId,
          method: 'PATCH',
          params: {
            uploadType: 'media',
          },
          body: JSON.stringify(data.result),
        })
      })
  }

  async clear() {
    if (!(await this.setupDrive())) {
      return await localforage.clear()
    }
    return await localforage.clear()
  }

  async length() {
    if (!(await this.setupDrive())) {
      return await localforage.length()
    }
    return await localforage.length()
  }

  async key(keyIndex) {
    if (!(await this.setupDrive())) {
      return await localforage.key(keyIndex)
    }
    return await localforage.key(keyIndex)
  }

  get _config() {
    return localforage.config()
  }
}
const vuexLocal = new VuexPersistence({
  storage: new DriveStorage(),
  supportCircular: true,
  asyncStorage: true,
  key: 'state-0',
  modules: ['general', 'progress'],
  restoreState: async (key, storage) => {
    await Vue.prototype.$gapi.getGapiClient()
    return await storage.getItem(key)
  },
  filter: (mutation) => {
    return !mutation.type.startsWith('auth')
  },
})

export const plugins = [vuexLocal.plugin]
