function bindActionCreator(creator, dispatch) {
  return (...args) => dispatch(creator(...args))
}

export function bindActionCreators (creators, dispatch) {
  let obj = {}

  // 遍历creators
  for (let key in creators) {
    obj[key] = bindActionCreator(creators[key], dispatch)
  }

  return obj
}