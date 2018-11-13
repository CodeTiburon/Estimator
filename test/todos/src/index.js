import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import * as serviceWorker from './serviceWorker';

import './index.css';
import todoApp from './includes/reducers';
import { addTodo, removeTodo, toggleTodo } from './includes/actions';

import Root from './Root';

const store = createStore(todoApp);

store.dispatch( addTodo('Calculate money') );
store.dispatch( addTodo('Order cat food') );

store.dispatch( removeTodo(1) );

store.dispatch( addTodo('Order Minions HotWheels') );
store.dispatch( addTodo('Ask to unplug headphones') );

store.dispatch( toggleTodo(2) );

ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
