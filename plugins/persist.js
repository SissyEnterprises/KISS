import VuexPersistence from 'vuex-persist'
import * as localforage from 'localforage'

export default ({ app, store }, inject) => {
  window.onNuxtReady(() => {
    new VuexPersistence({
      storage: localforage,
      asyncStorage: true,
      key: 'app-state',
      modules: ['general'],
      restoreState: (key, storage) => {
        return new Promise((resolve) => {
          storage.getItem(key).then((data) => {
            let object = null
            if (typeof data === 'object') {
              object = data
            } else {
              object = JSON.parse(data)
            }
            resolve(object)
          })
        })
      },
    }).plugin(store)
    store.restored.then(() => {
      store.commit('stateLoaded', true)
    })
  })
}
