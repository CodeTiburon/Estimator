import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = theme => ({
    completed: {
        textDecoration: 'line-through',
        fontStyle: 'italic',
    }
});

const Todo = ({classes, theme, text, completed, onClick}) => (
    <ListItem
        button
        onClick={onClick}
    >
        <ListItemText primary={text} className={completed ? classes.completed : ''} />
    </ListItem>
);

Todo.propTypes = {
    classes: PropTypes.object.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default withStyles(styles)(Todo);
