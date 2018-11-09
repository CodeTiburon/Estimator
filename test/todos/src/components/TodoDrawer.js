import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';

export const drawerWidth = 240;

const styles = theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
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
      width: theme.spacing.unit * 7 + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing.unit * 9 + 1,
      },
    },
    padding: {
        ...theme.mixins.toolbar,
    },
});

const TodoDrawer = (props) => {
    const { classes, theme, open, hover, onHoverDrawer, onLeaveDrawer } = props;

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
            <div className={classes.padding}></div>
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>

                        <ListItemText primary={text} />
                    </ListItem>
                ))}
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
