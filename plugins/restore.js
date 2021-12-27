export default ({ app, store }) => {
  app.router.beforeEach((to, from, next) => {
    store.restored.then(() => {
      next()
    })
  })
}
