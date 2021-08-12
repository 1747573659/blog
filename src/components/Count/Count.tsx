import { useEffect, useRef } from "react"

// 引入store
import store from '../../redux/store';

// 引入actionCreator
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/count_action';

const Count = function () {
  const selectedNumber = useRef<HTMLSelectElement>(null)

  useEffect(() => {
    store.subscribe(() => {

    })
  },[])

  const increment = () => {
    const { value }:any = selectedNumber.current
    // 通知redux加value
    store.dispatch(createIncrementAction(value*1))
  }
  const decrement = () => {
    const { value }:any = selectedNumber.current
    store.dispatch(createDecrementAction(value*1))
  }
  const incrementOfOdd = () => {
    const { value }:any = selectedNumber.current
    let add = store.getState() + Number(value)
    if (add%2) {
      store.dispatch(createIncrementAction(value*1))
    }
  }
  const incrementAsync = () => {
    const { value }:any = selectedNumber.current
    store.dispatch(createIncrementAsyncAction(value*1, 1000))
  }
  return (
    <div>
      <h1>当前求和为：{store.getState()}</h1>
      <select ref={selectedNumber}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
      </select>&nbsp;
      <button onClick={increment}>+</button>&nbsp;
      <button onClick={decrement}>-</button>&nbsp;
      <button onClick={incrementOfOdd}>当前求和为奇数再加</button>&nbsp;
      <button onClick={incrementAsync}>异步加</button>&nbsp;
    </div>
  )
}

export default Count