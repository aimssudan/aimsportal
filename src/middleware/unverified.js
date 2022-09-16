export default function unverified ({ next, store }){

  if(!store.getters['auth/authenticated']) {
      return next({
          name: 'login'
      })
  }

  if(store.getters['auth/verified']) {
    return next({
      name: 'dashboard'
    })
  }

  return next()
}