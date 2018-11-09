import React from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';

import Todo from './Todo';

const TodoList = ({todos, onTodoClick}) => (
    <List>
        {todos.items.map( (item) => (
            <Todo key={item.id} {...item} onClick={ () => onTodoClick(item.id) } />
        ))}
    </List>
)

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.shape({
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                text: PropTypes.string.isRequired,
                completed: PropTypes.bool.isRequired,
            }).isRequired
        ).isRequired,
    }).isRequired,
}

export default TodoList;
