export const postsState = {
    NONE: 0,
    LOADING: 1,
    SUCCESS: 2,
    ERROR: 3,
}

export const defaultState = {
    source: 'ct2018',
    posts: {
        'ct2018': {
            state: postsState.NONE,
            items: [],
            lastUpdate: 0,
        },
    },
}

export const actionPosts = {
    INVALIDATE: 'action.posts.invalidate',
    REQUEST: 'action.posts.request',
    RECEIVED: 'action.posts.received',
    ERROR: 'action.posts.ERROR',
}

export const actionPostsSource = {
    SWITCH: 'action.posts.source.switch',
}

export function postsSwitchSource(source) {
    return {
        type: actionPostsSource.SWITCH,
        source: source,
    }
}
