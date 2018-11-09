import React from 'react';
import './App.css';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import VisibleAppBar from './containers/VisibleAppBar';
import VisibleDrawer from './containers/VisibleDrawer';
import Footer from './components/Footer';
import VisibleTodoList from './containers/VisibleTodoList';
import AddTodo from './containers/AddTodo';

const styles = theme => ({
    root: {
        display: 'flex',
    },
    padding: {
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
    },
});

const App = (props) => {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <CssBaseline />

            <VisibleAppBar/>

            <VisibleDrawer />

            <main className={classes.content}>
                <div className={classes.padding}></div>

                <Grid container>
                    <VisibleTodoList />
                    <Footer />
                    <AddTodo />
                </Grid>
            </main>
        </div>
    );
}

export default withStyles(styles, { withTheme: true })(App);
