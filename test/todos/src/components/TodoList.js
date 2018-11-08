import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

const TodoList = ({todos, onTodoClick}) => (
    <ul>
        {todos.items.map( (item) => (
            <Todo key={item.id} {...item} onClick={ () => onTodoClick(item.id) } />
        ))}
    </ul>
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
