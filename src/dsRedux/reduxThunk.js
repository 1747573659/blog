export default function reduxThunk({getState, dispatch}) {
  return next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState)
    }

    return next(action)
  }
}