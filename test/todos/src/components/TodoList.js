import React from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo';

const TodoList = ({todos, onTodoClick}) => (
    <ul>
        {todos.map( (item, id) => (
            <Todo key={id} {...item} onClick={ () => onTodoClick(id) } />
        ))}
    </ul>
)

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        }).isRequired,
    ).isRequired,
}

export default TodoList;
