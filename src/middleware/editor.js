export default function editor ({ next, store }){

  if(!store.getters['auth/contributor'] || !store.getters['auth/superadmin'] || !store.getters['auth/manager']) {
    return next({
      name: 'verify'
    })
  }

  return next()
}