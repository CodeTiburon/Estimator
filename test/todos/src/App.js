import React from 'react';
import './App.css';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import TopSpacer from './components/TopSpacer';
import VisibleAppBar from './containers/VisibleAppBar';
import VisibleDrawer from './containers/VisibleDrawer';
import VisibleFiltersBar from './containers/VisibleFiltersBar';
import VisibleTodoList from './containers/VisibleTodoList';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
});

const App = (props) => {
    const { classes, match } = props;
    const filter = match.params.filter;

    return (
        <div className={classes.root}>
            <CssBaseline />

            <VisibleAppBar/>

            <VisibleDrawer />

            <main className={classes.content}>
                <TopSpacer />

                <VisibleFiltersBar />

                <VisibleTodoList filter={filter} />
            </main>
        </div>
    );
}

export default withStyles(styles, { withTheme: true })(App);
