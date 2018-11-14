import { combineReducers } from 'redux';

import {
    defaultState,
    actionPosts,
} from './postsActions';

function switchSource(state = defaultState.source, action) {
    return (actionPosts.SWITCH === action.type) ? action.source : state;
}

const postsApp = combineReducers({
    // current: switchCurrent,
    // posts: getPosts,

    source: switchSource,
    // state: postsState.INVALIDATE,
    // error: '',
    // posts: {
    //     'ct2018': {
    //         items: [],
    //         lastUpdate: 0,
    //     },
    // },
});

export default postsApp;
