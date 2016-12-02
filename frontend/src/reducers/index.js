import { combineReducers } from 'redux';

// Reducers
import userReducer from './user-reducer';
import postReducer from './post-reducer';
import photoReducer from './photo-reducer';
import friendshipReducer from './friendship-reducer';

// Combine Reducers
var reducers = combineReducers({
    userState: userReducer,
    postState: postReducer,
    photoState: photoReducer,
    friendshipState: friendshipReducer
});

export default reducers;
