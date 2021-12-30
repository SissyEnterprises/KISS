export default ({ app, store, $vuetify }) => {
  app.router.beforeEach((to, from, next) => {
    store.restored.then(() => {
      $vuetify.theme.dark = store.getters['general/themeDark']
      next()
    })
  })
}
