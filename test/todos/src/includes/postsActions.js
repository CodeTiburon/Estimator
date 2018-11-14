import axios from 'axios';

export const postsState = {
    INVALIDATE: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: 3,
}

export const defaultState = {
    source: 'ct2018',
    state: postsState.INVALIDATE,
    error: null,
    info: {},

    // posts: {
    //     'ct2018': {
    //         items: [],
    //         lastUpdate: 0,
    //     },
    // },
}

export const actionPosts = {
    LOADING: 'action.posts.loading',
    SUCCESS: 'action.posts.success',
    ERROR: 'action.posts.error',
    SOURCE: 'action.posts.switch',
}

export const actionSource = {
    LOADING: 'action.posts.loading',
    SUCCESS: 'action.posts.success',
    ERROR: 'action.posts.error',
    SOURCE: 'action.posts.switch',
}

export const switchSource = source => {
    return dispatch => {
        dispatch( postsSourceStarted(source) );

        axios
            .get( `http://${source}/wp-json/`, {})
            .then( result => {
                dispatch( postsSourceLoaded(result.data) );
            })
            .catch( error => {
                dispatch( postsSourceError(error.message) );
            });
    }
}

export function postsSourceStarted(source) {
    return {
        type: actionSource.LOADING,
        source,
    }
}

export function postsSourceLoaded(info) {
    return {
        type: actionSource.SUCCESS,
        info,
    }
}

export function postsSourceError(error) {
    return {
        type: actionSource.ERROR,
        error,
    }
}

// export function postsSwitchSource(name) {
//     return {
//         type: actionPosts.SOURCE,
//         name,
//     }
// }
//
// export function postsError(name) {
//     return {
//         type: actionPosts.SOURCE,
//         name,
//     }
// }

// export function postsLoading() {
//     return {
//         type: actionPosts.LOADING,
//     }
// }
//
// export function postsSuccess(posts) {
//     return {
//         type: actionPosts.SUCCESS,
//         items: posts,
//     }
// }
//
// export function postsError(error) {
//     return {
//         type: actionPosts.ERROR,
//         error,
//     }
// }
