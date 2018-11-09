import { combineReducers } from 'redux';

import {
    todoFilter,
    defaultState,

    actionTodo,
    actionVisibility,
    actionDrawer,
} from './actions.js';

function todos(state = defaultState.todos, action) {
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

function filterTodos(state = todoFilter.ALL, action) {
    return (actionVisibility.SET === action.type) ? action.filter : state;
}

function drawer(state = defaultState.drawer, action) {
    switch (action.type) {
        case actionDrawer.TOGGLE:
            return Object.assign({}, state, {
                open: !state.open
            });
        case actionDrawer.HOVER:
            return Object.assign({}, state, {
                hover: true
            });
        case actionDrawer.LEAVE:
            return Object.assign({}, state, {
                hover: false
            });
        default:
            return state;
    }
}

const todoApp = combineReducers({
    filter: filterTodos,
    todos: todos,
    drawer: drawer,
});

export default todoApp;
