import { defaultState as postsDefaultState } from './postsActions';
import { defaultState as appDefaultState } from './appActions';

export const defaultState = {
    todos: {
        nextId: 0,
        editId: null,
        items: [],
    },
    app: appDefaultState,
    rest: postsDefaultState,
}

export const actionTodo = {
    ADD: 'action.todo.add',
    REMOVE: 'action.todo.remove',
    TOGGLE: 'action.todo.toggle',
    EDIT: 'action.todo.edit',
}

export const actionDialog = {
    CLOSE: 'action.dialog.close',
    OPEN: 'action.dialog.open',
}

export function addTodo(text) {
    return {
        type: actionTodo.ADD,
        text: text,
    }
}

export function editTodo(id, text) {
    return {
        type: actionTodo.EDIT,
        id: id,
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

export function closeDialog() {
    return {
        type: actionDialog.CLOSE,
    }
}

export function openDialog(id = null) {
    return {
        type: actionDialog.OPEN,
        id: id,
    }
}
