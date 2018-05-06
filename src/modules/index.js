import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import phrases from './phrases'

export default combineReducers({
  routing: routerReducer,
  phrases
})