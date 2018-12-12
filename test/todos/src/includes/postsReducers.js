// import { combineReducers } from 'redux';

import {
    defaultState,
    postsState,
    // actionPosts,
    actionSource
} from './postsActions';


// function switchSource(state = defaultState.source, action) {
//     if (actionPosts.SOURCE === action.type) {
//         return {
//             ...state,
//             state: postsState.INVALIDATE,
//             name: action.name,
//             error: null,
//         }
//     }
//
//     return state;
// }

// const postsApp = combineReducers({
    // current: switchCurrent,
    // posts: getPosts,

    // source: switchSource,
    // state: postsState.INVALIDATE,
    // error: '',
    // posts: {
    //     'ct2018': {
    //         items: [],
    //         lastUpdate: 0,
    //     },
    // },
// });

export default function postsApp(state = defaultState, action) {
    switch (action.type) {
        case actionSource.CHANGING:
            return {
                ...state,
                state: postsState.CHANGING,
                prev_state: state.state,
            };

        case actionSource.CANCELCHANGE:
            return {
                ...state,
                state: state.prev_state,
            };

        case actionSource.EMPTY:
            return {
                ...state,
                state: postsState.EMPTY,
                source: '',
                error: null,
                info: {},
                posts: {
                    lastUpdated: 0,
                    items: [],
                },
            };

        case actionSource.LOADING:
            return {
                ...state,
                source: action.source,
                state: postsState.LOADING,
                error: null,
                info: {},
            };

        case actionSource.SUCCESS:
            return {
                ...state,
                state: postsState.SUCCESS,
                error: null,
                info: action.info,
            };

        case actionSource.ERROR:
            return {
                ...state,
                state: postsState.ERROR,
                error: action.error,
                info: {},
            };

        default:
            return state;
    }
}


// export default postsApp;

// http://ct2018.wp/wp-json/
