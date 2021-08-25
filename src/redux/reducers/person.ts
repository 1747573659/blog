import {
  ADD_PERSON,
  PersontAction,
  Person
} from '../contant'

const initState:Array<Person> = [
  {
    age: '18',
    name: '李四',
    id: '1'
  }
]

const personReducer = (preState:Array<Person> = initState, action:PersontAction) => {
  const { type, data } = action

  switch(type) {
    case ADD_PERSON:
      return [data, ...preState]
    default:
      return preState
  }

}

export default personReducer