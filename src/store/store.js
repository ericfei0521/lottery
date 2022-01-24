import HandleTimmer from '../reducers/TimeReducer';
import HandleCandidate from '../reducers/CandidateReducer';

import { combineReducers, createStore } from 'redux';

const allRedcuer = combineReducers({
    HandleTimmer,
    HandleCandidate,
});

const store = createStore(allRedcuer);

export default store;
