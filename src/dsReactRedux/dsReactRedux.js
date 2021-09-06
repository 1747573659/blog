/**
 * 
 * 跨层级数据传递
 * context三步走
 * step1：创建一个context对象
 */
import React, {useContext} from 'react'
const Context = React.createContext()


// Provider传递store
export function Provider ({store, children}) {
  return <Context.Provider value={store}>children</Context.Provider>
}

// 子孙组件接收store
//1) Consumer
//2) contextType 只能用在类组件，只能订阅单一的context来源
//3) useContext 只能用在函数组件或者是自定义hook
export const connect = (mapStateToProps, mapDispatchToProps) => WrappedComponent => props => {

  const store = useContext(Context)

  const stateProps = mapStateToProps(store.getState())
  const dispatchProps = mapDispatchToProps


  return <WrappedComponent {...props} {...stateProps} {...dispatchProps}/>
}

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