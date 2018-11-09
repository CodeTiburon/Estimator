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
    todos: {
        nextId: 0,
        items: [],
    }
}

export const actionTodo = {
    ADD: 'action.todo.add',
    REMOVE: 'action.todo.remove',
    TOGGLE: 'action.todo.toggle',
}

export const actionVisibility = {
    SET: 'action.visibility.set',
}

export const actionDrawer = {
    TOGGLE: 'action.drawer.toggle',
    HOVER: 'action.drawer.hover',
    LEAVE: 'action.drawer.leave',
}

export function addTodo(text) {
    return {
        type: actionTodo.ADD,
        text: text,
    }
}

export function removeTodo(id) {
    return {
        type: actionTodo.REMOVE,
        id: id,
    }
}

export function toggleTodo(id) {
    return {
        type: actionTodo.TOGGLE,
        id: id,
    }
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
