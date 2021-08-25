/**
 * 该文件是用于创建一个为Count组件服务的reducer，reducer的本质就是一个函数
 * reducer会接受到两个函数，分别为：之前的状态preState和动作对象action
 */

import {
  INCREMENT,
  DECREMENT,
  CountAction
} from '../contant';


const initState = 0
const countReducer = (preState:number = initState, action:CountAction):number => {

  const { type, data } = action

  switch(type) {
    case INCREMENT:
      return preState + data
    case DECREMENT:
      return preState - data
    default:
      return preState
  }

}

export default countReducer