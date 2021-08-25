import { Person } from '@/redux/contant';
import {useRef} from 'react'

import { connect } from 'react-redux'

import { createPerson } from '../../redux/actions/person'

import { nanoid } from 'nanoid'

const PersonUI = (props:any) => {
  const { state: {countReducer,personReducer}, createPerson } = props

  console.log(personReducer)

  const ageRef = useRef<HTMLInputElement>(null)
  const nameRef = useRef<HTMLInputElement>(null)

  const addPerson = () => {
    const { value: name }:any = nameRef.current
    const { value: age }:any = ageRef.current
    const data: Person = {
      age,
      name,
      id: nanoid()
    }
    console.log(data);
    createPerson(data)
  }

  return (
    <div>
      <h4>我是Person组件</h4>
      <h5>Count组件的值是{countReducer}</h5>
      <input ref={nameRef} type="text" placeholder="输入名字" />
      <input ref={ageRef} type="text" placeholder="输入年龄" />
      <button onClick={addPerson}>添加</button>
      <ul>
        {
          personReducer.map(({id, name, age}:any) => <li key={id}>名字：{name},年龄：{age}</li>)
        }
      </ul>
    </div>
  )
}

export default connect(
  (state:any) => ({ state }),
  {
    createPerson
  }
)(PersonUI)
