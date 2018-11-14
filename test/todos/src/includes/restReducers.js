import { combineReducers } from 'redux';

import { defaultState } from './actions';
import { postsState } from './postsActions';

function switchCurrent(state = defaultState.rest.current, action) {
    return (postsState.SWITCH === action.type) ? action.current : state;
}

function getPosts(state = []) {
    return state;
}

const restApp = combineReducers({
    current: switchCurrent,
    posts: getPosts,
});

export default restApp;
