import { useRef, useState } from "react"

const Count = function () {
  const selectedNumber = useRef<HTMLSelectElement>(null)

  const [count, setCount] = useState(0)

  const increment = () => {
    const { value }:any = selectedNumber.current
    setCount(count + Number(value))
  }
  const decrement = () => {
    const { value }:any = selectedNumber.current
    setCount(count - Number(value))
  }
  const incrementOfOdd = () => {
    const { value }:any = selectedNumber.current
    let add = count + Number(value)
    if (add%2) {
      setCount(add)
    }
  }
  const incrementAsync = () => {
    const { value }:any = selectedNumber.current
    setTimeout(() => setCount(count + Number(value)), 1000)
  }
  return (
    <div>
      <h1>当前求和为：{count}</h1>
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