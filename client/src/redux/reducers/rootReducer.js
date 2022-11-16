import { combineReducers } from 'redux';
import { authReducer }  from './authReducer';
import cardReducer from './cardReducer'
// import idEditReduser from './idEditReduser';



export const rootReducer = combineReducers({
  auth : authReducer,
  cards: cardReducer,
  // idForEdit: idEditReduser,
})
