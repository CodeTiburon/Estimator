import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

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

const FiltersBar = ( {classes, value, onTabChange} ) => {
    const tabs = [
        {
            value: todoFilter.ALL,
            label: 'All',
            icon: <AllIcon />,
            link: '/',
        },
        {
            value: todoFilter.UNCOMPLETED,
            label: 'Pending',
            icon: <PendingIcon />,
            link: '/pending',
        },
        {
            value: todoFilter.COMPLETED,
            label: 'Complete',
            icon: <CompletedIcon />,
            link: '/completed',
        },
    ];

    return (
        <AppBar position="static" color="default" elevation={1}>
            <Tabs
                value={value}
                onChange={ (e, value) => onTabChange(value) }
                indicatorColor="primary"
            >

                {tabs.map( item => (
                        <Tab
                            className={classes.filterTab}
                            value={item.value}
                            icon={<Hidden smDown>{item.icon}</Hidden>}
                            label={item.label}
                            key={item.value}
                            component={Link}
                            to={item.link}
                        />
                ))}

            </Tabs>
        </AppBar>
    );
}

FiltersBar.propTypes = {
    value: PropTypes.number.isRequired,
    onTabChange: PropTypes.func.isRequired,
};

export default withStyles(styles)(FiltersBar);
