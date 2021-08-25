import {connect} from 'react-redux'

import {
  increment,
  decrement,
  incrementAsync
} from '../../redux/actions/count'

import { useRef } from "react"

const Count = (props:any) => {
  const selectedNumber = useRef<HTMLSelectElement>(null)

  const increment = () => {
    const { value }:any = selectedNumber.current
    // 通知redux加value
    props.increment(value*1)
  }
  const decrement = () => {
    const { value }:any = selectedNumber.current
    props.decrement(value*1)
  }
  const incrementOfOdd = () => {
    const { value }:any = selectedNumber.current
    if (props.count % 2) props.increment(value*1)
  }
  const incrementAsync = () => {
    const { value }:any = selectedNumber.current
    props.incrementAsync(value*1, 500)
  }
  return (
    <div>
      <h4>我是Count组件</h4>
      <h5>Persons的长度: {props.state.personReducer.length}</h5>
      <h1>当前求和为：{props.state.countReducer}</h1>
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

export default connect(
  (state:any) => ({ state }),
  {
    increment,
    decrement,
    incrementAsync
  }
)(Count)
