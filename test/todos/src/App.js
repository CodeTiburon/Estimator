import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import './App.css';

import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import TopSpacer from './components/TopSpacer';
import VisibleAppBar from './containers/VisibleAppBar';
import VisibleDrawer from './containers/VisibleDrawer';

import TodoPage from './TodoPage';
import RestPage from './RestPage';

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
    const { classes, store } = props;

    return (
        <Provider store={store}>
            <Router>
                <div className={classes.root}>
                    <CssBaseline />

                    <VisibleAppBar/>

                    <VisibleDrawer />

                    <main className={classes.content}>
                        <TopSpacer />

                        <Switch>
                            <Route path="/rest" component={RestPage} />
                            <Route path="/:filter?" component={TodoPage} />
                        </Switch>
                    </main>
                </div>
            </Router>
        </Provider>
    );
}

App.propType = {
    store: PropTypes.object.isRequired,
}

export default withStyles(styles, { withTheme: true })(App);
