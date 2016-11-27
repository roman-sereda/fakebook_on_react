import { combineReducers } from 'redux';

// Reducers
import userReducer from './user-reducer';
import postReducer from './post-reducer';

// Combine Reducers
var reducers = combineReducers({
    userState: userReducer,
    postState: postReducer
});

export default reducers;
