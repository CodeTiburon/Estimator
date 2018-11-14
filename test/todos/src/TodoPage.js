import React from 'react';
import VisibleFiltersBar from './containers/VisibleFiltersBar';
import VisibleTodoList from './containers/VisibleTodoList';

const TodoPage = ({match}) => {
    const filter = match.params.filter;

    return (
        <div>
            <VisibleFiltersBar filter={filter} />
            <VisibleTodoList filter={filter} />
        </div>
    );
}

export default TodoPage;
