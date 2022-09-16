export default function verified ({ next, store }){

  if(!store.getters['auth/verified']) {
    return next({
      name: 'verify'
    })
  }

  return next()
}