import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import EditIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
    completed: {
        textDecoration: 'line-through',
        fontStyle: 'italic',
    },
});

const Todo = ({classes, theme, text, completed, onClick, onDelete, onEdit}) => (
    <div className='todo-item'>
        <ListItem
            button
            onClick={onClick}
            className={classNames(classes.root, 'todo-item')}
        >
            <ListItemText primary={text} className={completed ? classes.completed : ''} />

            <ListItemSecondaryAction className="todo-item-actions">
                <Tooltip title="Edit">
                    <IconButton onClick={onEdit}>
                        <EditIcon />
                    </IconButton>
                </Tooltip>

                <Tooltip title="Delete">
                    <IconButton size="small" onClick={onDelete}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </ListItemSecondaryAction>
        </ListItem>
    </div>
);

Todo.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
}

export default withStyles(styles)(Todo);
