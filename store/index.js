import VuexPersistence from 'vuex-persist'
import * as localforage from 'localforage'

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

const version = process.env.version ? process.env.version : '0'
const vuexLocal = new VuexPersistence({
  storage: localforage,
  asyncStorage: true,
  key: 'state-' + version,
  modules: ['general'],
})

export const plugins = [vuexLocal.plugin]
