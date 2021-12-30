export const state = () => ({
  initialSetup: null,
})

export const getters = {
  initialSetup(state) {
    return state.initialSetup
  },
}

export const mutations = {
  initialSetup(state, payload) {
    state.initialSetup = payload
  },
}
