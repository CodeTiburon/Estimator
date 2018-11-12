import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Hidden from '@material-ui/core/Hidden';

import AllIcon from '@material-ui/icons/ViewHeadline';
import CompletedIcon from '@material-ui/icons/CheckCircleOutline';
import PendingIcon from '@material-ui/icons/Update';

import { todoFilter } from '../includes/actions';

const styles = theme => ({
    filterTab: {
        minHeight: 48,
    },
});

const FilterIcon = ({icon}) => (
    <Hidden smDown>{icon}</Hidden>
)

const FiltersBar = ( {classes, value, onTabChange} ) => {
    return (
        <AppBar position="static" color="default" elevation={1}>
            <Tabs
                value={value}
                onChange={ (e, value) => onTabChange(value) }
                indicatorColor="primary"
            >
                <Tab
                    className={classes.filterTab}
                    value={todoFilter.ALL}
                    icon={<FilterIcon icon=<AllIcon /> />}
                    label="All"
                />

                <Tab
                    className={classes.filterTab}
                    value={todoFilter.UNCOMPLETED}
                    icon={<FilterIcon icon=<PendingIcon /> />}
                    label="Pending"
                />

                <Tab
                    className={classes.filterTab}
                    value={todoFilter.COMPLETED}
                    icon={<FilterIcon icon=<CompletedIcon /> />}
                    label="Completed" />
            </Tabs>
        </AppBar>
    );
}

FiltersBar.propTypes = {
    value: PropTypes.number.isRequired,
    onTabChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(FiltersBar);
