export default function verified ({ next, store }){

  if(!store.getters['auth/superadmin']) {
    return next({
      name: 'verify'
    })
  }

  return next()
}