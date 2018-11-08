import { combineReducers } from 'redux';

import {
    actionTodo,
    actionVisibility,
    todoFilter,
} from './actions.js';

const defaultTodos = {
    nextId: 0,
    items: [],
}

function todos(state = defaultTodos, action) {
    switch (action.type) {
        case actionTodo.ADD:
            const nextId = state.items.length ? state.nextId + 1 : 0;

            return {
                nextId: nextId,
                items: [
                    ...state.items,
                    {
                        id: nextId,
                        text: action.text,
                        completed: false,
                    }
                ],
            }

        case actionTodo.TOGGLE:
            return Object.assign({}, state, {
                items: state.items.map( item => {
                    if ( item.id === action.id ) {
                        return Object.assign({}, item, {
                            completed: !item.completed,
                        });
                    }

                    return item;
                })
            });

        case actionTodo.REMOVE:
            return Object.assign({}, state, {
                items: state.items.filter( item => {
                    return item.id !== action.id;
                })
            });

        default:
            return state;
    }
}

function visibility(state = todoFilter.ALL, action) {
    return (actionVisibility.SET === action.type) ? action.filter : state;
}

const todoApp = combineReducers({
    filter: visibility,
    todos: todos,
});

export default todoApp;
