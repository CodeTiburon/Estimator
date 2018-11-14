import { combineReducers } from 'redux';

import {
    todoFilter,
    defaultState as appDefaultState,
    actionVisibility,
    actionDrawer,
} from './appActions';

function filterTodos(state = todoFilter.ALL, action) {
    return (actionVisibility.SET === action.type) ? action.filter : state;
}

function drawer(state = appDefaultState.drawer, action) {
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

const appApp = combineReducers({
    filter: filterTodos,
    drawer: drawer,
});

export default appApp;
