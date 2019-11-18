import { createStore, combineReducers } from 'redux';
import todoReducer from './reducer-todo';


let reducers = combineReducers({
    allReducers: todoReducer
});

let store = createStore(reducers);

export default store;