export const actionTodo = {
    ADD: 'action.todo.add',
    REMOVE: 'action.todo.remove',
    TOGGLE: 'action.todo.toggle',
}

export const actionVisibility = {
    SET: 'action.visibility.set',
}

export const todoFilter = {
    ALL: 0,
    COMPLETED: 1,
    UNCOMPLETED: 2,
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
