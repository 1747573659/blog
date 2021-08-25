import { createStore, applyMiddleware, combineReducers } from "redux"

import countReducer from './reducers/conut';

import personReducer from './reducers/person'

// 引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk';

const allReducers = combineReducers({
  countReducer,
  personReducer
})

export default createStore(allReducers, applyMiddleware(thunk))
