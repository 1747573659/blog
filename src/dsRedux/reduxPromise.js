const reduxPromise =
  ({ getState, dispatch }) =>
  next =>
  action => {
    action instanceof Promise ? action().then(dispatch) : next(action)
  }

export default reduxPromise