/**
 * 该文件专门为Count组件生成action对象
 */

import {
  INCREMENT,
  DECREMENT,
  CountAction
} from '../contant';

// 加法
export const increment = (data:number):CountAction => ({ type: INCREMENT, data })

// 减法
export const decrement = (data:number):CountAction => ({ type: DECREMENT, data })

// 异步加 就是值action的值为函数，异步action中一般都会调用同步action，异步action不是必须要用的
export const incrementAsync = (data:number, time:number = 500):CountAction | Function => {
  return (dispatch:any) => {
    setTimeout(() => {
      dispatch(increment(data))
    }, time);
  }
}
