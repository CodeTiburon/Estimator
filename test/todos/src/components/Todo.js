import React from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DoneIcon from '@material-ui/icons/Check';

const Todo = ({text, completed, onClick}) => (
    <ListItem
        button
        onClick={onClick}
    >
        <ListItemIcon>
            <DoneIcon />
        </ListItemIcon>

        <ListItemText primary={completed ? '* ' + text : text} />
    </ListItem>
);

Todo.propTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Todo;
