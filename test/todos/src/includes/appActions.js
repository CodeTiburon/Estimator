export const todoFilter = {
    ALL: 0,
    COMPLETED: 1,
    UNCOMPLETED: 2,
}

export const defaultState = {
    filter: todoFilter.ALL,
    drawer: {
        open: false,
        hover: false,
    },
}

export const actionVisibility = {
    SET: 'action.visibility.set',
}

export const actionDrawer = {
    TOGGLE: 'action.drawer.toggle',
    HOVER: 'action.drawer.hover',
    LEAVE: 'action.drawer.leave',
}

export function setVisibility(filter) {
    return {
        type: actionVisibility.SET,
        filter: filter,
    }
}

export function toggleDrawer() {
    return {
        type: actionDrawer.TOGGLE,
    }
}

export function hoverDrawer() {
    return {
        type: actionDrawer.HOVER,
    }
}

export function leaveDrawer() {
    return {
        type: actionDrawer.LEAVE,
    }
}
