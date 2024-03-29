import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Tooltip from '@material-ui/core/Tooltip';

import AddIcon from '@material-ui/icons/Add';

import Todo from './Todo';
import TodoDialog from '../containers/TodoDialog';

const styles = theme => ({
    root: {
        position: 'relative',
        paddingBottom: '84px',
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },
});

const TodoList = ({classes, todos, editId, onTodoClick, onAddClick, onEditClick, onDeleteClick}) => {
    return (
        <Paper className={classes.root}>
            <List>
                {todos.items.map( (item) => (
                    <Todo
                        key={item.id}
                        {...item}
                        onClick={ () => onTodoClick(item.id) }
                        onEdit={ () => onEditClick(item.id) }
                        onDelete={ () => onDeleteClick(item.id) }
                    />
                ))}
            </List>

            <Divider />

            <Tooltip title="Add New">
                <Button
                    variant="fab"
                    color="primary"
                    className={classes.fab}
                    onClick={ () => onAddClick() }
                >
                    <AddIcon />
                </Button>
            </Tooltip>

            <TodoDialog />
        </Paper>
    );
}

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    onAddClick: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
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

export default withStyles(styles)(TodoList);
