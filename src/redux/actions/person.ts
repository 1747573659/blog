import { ADD_PERSON, PersontAction, Person } from '../contant'

export const createPerson = (person:Person):PersontAction => ({type: ADD_PERSON, data: person})