import axios from 'axios';

export const postsState = {
    EMPTY: 0,
    CHANGING: 1,
    CANCELCHANGE: 2,

    LOADING: 300,
    SUCCESS: 400,
    ERROR: 500,
}

export const defaultState = {
    source: '',
    // state: postsState.SUCCESS,
    state: postsState.EMPTY,
    prev_state: postsState.EMPTY,
    error: null,
    info: {},
    posts: {
        lastUpdated: 0,
        items: [],
    },

    // posts: {
    //     'ct2018': {
    //         items: [],
    //         lastUpdate: 0,
    //     },
    // },
}

export const actionSource = {
    CHANGING: 'action.posts.changing',
    CANCELCHANGE: 'action.posts.cancel_change',
    EMPTY: 'action.posts.empty',


    LOADING: 'action.posts.loading',
    SUCCESS: 'action.posts.success',
    ERROR: 'action.posts.error',
    SOURCE: 'action.posts.switch',
}

export const actionPosts = {
    LOADING: 'action.posts.loading',
    SUCCESS: 'action.posts.success',
    ERROR: 'action.posts.error',
    SOURCE: 'action.posts.switch',
}

export function setDomainChange() {
    return {
        type: actionSource.CHANGING,
    }
}

export function setDomainChangeCancel() {
    return {
        type: actionSource.CANCELCHANGE,
    }
}

export const switchSource = source => {
    if ( !source.length ) {
        return {
            type: actionSource.EMPTY,
        }
    }

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
    console.log(info);
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
