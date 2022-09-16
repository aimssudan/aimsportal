export default async function auth ({ next, store }) {

  if (!store.getters['auth/authenticated']) {
    return next({
      name: 'login'
    })
  }

  await store.dispatch('auth/attempt', localStorage.getItem('token'))

  return next()
}