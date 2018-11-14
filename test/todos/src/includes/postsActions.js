export const postsState = {
    INVALIDATE: 1,
    LOADING: 2,
    STABLE: 3,
}

export const defaultState = {
    source: 'ct2018',
    state: postsState.INVALIDATE,
    error: '',
    posts: {
        'ct2018': {
            items: [],
            lastUpdate: 0,
        },
    },
}

export const actionPosts = {
    LOADING: 'action.posts.loading',
    SUCCESS: 'action.posts.success',
    ERROR: 'action.posts.error',
    SWITCH: 'action.posts.switch',
}

export function postsSwitchSource(source) {
    return {
        type: actionPosts.SWITCH,
        source,
    }
}

export function postsLoading() {
    return {
        type: actionPosts.LOADING,
    }
}

export function postsSuccess(posts) {
    return {
        type: actionPosts.SUCCESS,
        items: posts,
    }
}

export function postsError(error) {
    return {
        type: actionPosts.ERROR,
        error,
    }
}
