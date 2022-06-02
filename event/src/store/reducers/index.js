import { combineReducers } from 'redux';
import todoCatalogReducer from './todoCatalogReducer'
import todoReducer from './todoReducer';


export default combineReducers({
  todoCatalog: todoCatalogReducer,
  todo: todoReducer
})