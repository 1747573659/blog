export default function createStore(reducer, enhancer) {
  if (enhancer) {
    // enhancer
    return enhancer(createStore)(reducer)
  }
  let currentState;
  let currentListeners = []

  // get 
  function getState() {
    return currentState
  }

  // set
  function dispatch (action) {
    currentState = reducer(currentState, action)

    currentListeners.forEach(listener => listener())
  }

  function subscribe (listener) {
    currentListeners.push(listener)
    return () => {
      const index = currentListeners.indexOf(listener)
      currentListeners.splice(index, 1)
    }
  }

  dispatch({type: Symbol()})

  return {
    getState,
    dispatch,
    subscribe
  }
}