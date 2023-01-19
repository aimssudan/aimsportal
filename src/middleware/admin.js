export default function admin ({ next, store }){

  if(!store.getters['auth/superadmin']) {
    return next({
      name: 'verify'
    })
  }

  return next()
}