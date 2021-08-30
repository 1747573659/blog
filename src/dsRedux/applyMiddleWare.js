export default function applyMiddleware (...middleWares) {
  return createStore => reducer => {
    const store = createStore(reducer)
    let dispatch = store.dispatch

    const midApi = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args)
    }

    const middleWaresChain = middleWares.forEach(middleWare => {
      middleWare(midApi)
    })

    dispatch = compose(...middleWaresChain)(store.dispatch)

    return {...store, dispatch}
  }
}

function compose (...funcs) {
  if (!funcs.length) {
    return arg => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a,b) => (...args) => a(b(...args)))
}