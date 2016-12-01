import { combineReducers } from 'redux';

// Reducers
import userReducer from './user-reducer';
import postReducer from './post-reducer';
import friendshipReducer from './friendship-reducer';

// Combine Reducers
var reducers = combineReducers({
    userState: userReducer,
    postState: postReducer,
    friendshipState: friendshipReducer
});

export default reducers;
