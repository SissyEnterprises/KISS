export const state = () => ({
  theme: {
    dark: true,
  },
})

export const getters = {
  themeDark(state) {
    return state.theme.dark
  },
}

export const mutations = {
  setThemeDark(state, payload) {
    state.theme.dark = payload
  },
}
