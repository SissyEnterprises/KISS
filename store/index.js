import VuexPersistence from 'vuex-persist'
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
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
})

export const plugins = [vuexLocal.plugin]
