import React from 'react';
import FilterLink from '../containers/FilterLink';
import { todoFilter } from '../includes/actions';


const Footer = () => (
    <p>
        Show: <FilterLink filter={todoFilter.ALL}>All</FilterLink>
        {', '}
        <FilterLink filter={todoFilter.COMPLETED}>Completed</FilterLink>
        {', '}
        <FilterLink filter={todoFilter.UNCOMPLETED}>Uncompleted</FilterLink>
    </p>
)

export default Footer;
