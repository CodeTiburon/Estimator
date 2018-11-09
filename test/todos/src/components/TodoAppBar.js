import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = theme => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    toggled: {
        backgroundColor: theme.palette.action.hover,
    },
});

const TodoAppBar = (props) => {
    const { classes, open, onToggleDrawer } = props;

    return (
        <AppBar
            position="fixed"
            className={classes.appBar}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={() => onToggleDrawer()}
                    className={classNames(classes.menuButton, {
                        [classes.toggled]: open,
                    })}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" noWrap>
                    Todos Redux Sample
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

TodoAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  onToggleDrawer: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(TodoAppBar);
