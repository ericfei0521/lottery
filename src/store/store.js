import HandleTimmer from '../reducers/timmer';
import { combineReducers, createStore } from 'redux';

const allRedcuer = combineReducers({
    HandleTimmer,
});

const store = createStore(allRedcuer);

export default store;
