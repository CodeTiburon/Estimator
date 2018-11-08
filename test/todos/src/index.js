import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './includes/reducers';

import { addTodo, toggleTodo } from './includes/actions';

const store = createStore(todoApp);

store.dispatch( addTodo('Calculate money') );
store.dispatch( addTodo('Order cat food') );
store.dispatch( addTodo('Order Minions HotWheels') );
store.dispatch( addTodo('Ask to unplug headphones') );

store.dispatch( toggleTodo(2) );


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
