import { combineReducers } from 'redux'
import foundReducer from './allFound'
import lostReducer from './allLost'

export default combineReducers({
  foundReducer,
  lostReducer,
})
