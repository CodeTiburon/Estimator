import { combineReducers } from 'redux';

import {
    defaultState,

    actionTodo,
    actionDialog,
} from './actions.js';

import appApp from './appReducers.js';
import postsApp from './postsReducers.js';


function todos(state = defaultState.todos, action) {
    switch (action.type) {
        case actionTodo.ADD:
            const nextId = state.items.length ? state.nextId + 1 : 0;

            return {
                ...state,
                nextId: nextId,
                items: [
                    ...state.items,
                    {
                        id: nextId,
                        text: action.text,
                        completed: false,
                    }
                ],
            };

        case actionTodo.TOGGLE:
            return {
                ...state,
                items: state.items.map( item => {
                    if ( item.id === action.id ) {
                        return {
                            ...item,
                            completed: !item.completed,
                        }
                    }

                    return item;
                }),
            };

        case actionTodo.EDIT:
            return {
                ...state,
                items: state.items.map( item => {
                    if ( item.id === action.id ) {
                        return {
                            ...item,
                            text: action.text,
                        }
                    }

                    return item;
                }),
            }

        case actionTodo.REMOVE:
            return {
                ...state,
                items: state.items.filter( item => {
                    return item.id !== action.id;
                }),
            }

        case actionDialog.CLOSE:
            return {
                ...state,
                editId: null,
            }

        case actionDialog.OPEN:
            return {
                ...state,
                editId: action.id,
            }

        default:
            return state;
    }
}

const todoApp = combineReducers({
    app: appApp,
    todos: todos,
    posts: postsApp,
});

export default todoApp;
