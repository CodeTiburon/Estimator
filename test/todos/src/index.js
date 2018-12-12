import React from 'react';
import {render} from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import * as serviceWorker from './serviceWorker';

import './index.css';
import todoApp from './includes/reducers';
import { addTodo, removeTodo, toggleTodo } from './includes/actions';
import { switchSource } from './includes/postsActions';

import App from './App';

const store = createStore(todoApp, applyMiddleware(thunk) );

store.dispatch( addTodo('Calculate money') );
store.dispatch( addTodo('Order cat food') );

store.dispatch( removeTodo(1) );

store.dispatch( addTodo('Order Minions HotWheels') );
store.dispatch( addTodo('Ask to unplug headphones') );

store.dispatch( toggleTodo(2) );

// store.dispatch( switchSource('ct2018.wp') );

render(
    <App store={store} />,
    document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
