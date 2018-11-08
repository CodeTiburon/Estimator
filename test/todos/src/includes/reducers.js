import { combineReducers } from 'redux';

import {
    actionTodo,
    actionVisibility,
    todoFilter,
} from './actions.js';

function todos(state = [], action) {
    switch (action.type) {
        case actionTodo.ADD:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false,
                }
            ];

        case actionTodo.TOGGLE:
            return state.map( (todo, index) => {
                if ( index === action.id ) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed,
                    });
                }

                return todo;
            });

        case actionTodo.REMOVE:
            return state.filter( (todo, index) => {
                return index !== action.id;
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
