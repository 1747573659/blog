import { useEffect, useRef } from "react"

const Count = function (props:any) {
  const selectedNumber = useRef<HTMLSelectElement>(null)

  const increment = () => {
    const { value }:any = selectedNumber.current
    // 通知redux加value
    props.add(value*1)
  }
  const decrement = () => {
    const { value }:any = selectedNumber.current
  }
  const incrementOfOdd = () => {
    const { value }:any = selectedNumber.current

  }
  const incrementAsync = () => {
    const { value }:any = selectedNumber.current
  }
  return (
    <div>
      <h1>当前求和为：{props.count}</h1>
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