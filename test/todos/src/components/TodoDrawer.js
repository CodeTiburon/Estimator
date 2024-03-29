import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import TodoIcon from '@material-ui/icons/List';

import TopSpacer from './TopSpacer';

export const drawerWidth = 240;

const styles = theme => ({
    drawer: {
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
      },
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: 0,
      [theme.breakpoints.up('md')]: {
        width: theme.spacing.unit * 9 + 1,
      },
    },
});

const TodoDrawer = (props) => {
    const { classes, open, hover, onHoverDrawer, onLeaveDrawer } = props;

    const show = open || hover;

    return (
        <Drawer
            variant="permanent"
            open={show}
            className={classNames(classes.drawer, {
                [classes.drawerOpen]: show,
                [classes.drawerClose]: !show,
            })}
            classes={{
                paper: classNames({
                    [classes.drawerOpen]: show,
                    [classes.drawerClose]: !show,
                }),
            }}
            onMouseEnter={ () => onHoverDrawer()}
            onMouseLeave={ () => onLeaveDrawer()}
        >

            <TopSpacer />

            <List>
                <ListItem
                    button
                    component={Link}
                    to="/"
                >
                    <ListItemIcon>
                        <TodoIcon />
                    </ListItemIcon>

                    <ListItemText primary="Todos" />
                </ListItem>

                <ListItem
                    button
                    component={Link}
                    to="/rest"
                >
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>

                    <ListItemText primary="Remote test" />
                </ListItem>

            </List>

            <Divider />
        </Drawer>
    );
}

TodoDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  open: PropTypes.bool.isRequired,
  hover: PropTypes.bool.isRequired,
  onHoverDrawer: PropTypes.func.isRequired,
  onLeaveDrawer: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(TodoDrawer);
