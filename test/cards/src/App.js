import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Switch, matchPath } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';

// import logo from './logo.svg';
import 'react-toastify/dist/ReactToastify.min.css';
import './styles/App.scss';

import WList from './Components/WList.js';
import About from './Components/About.js';
import Info from './Components/Info.js';
import Single from './Components/Single.js';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <div className="row">
                        <h1 className="col">List of posts</h1>
                    </div>

                    <Nav pills>
                        <NavItem>
                            <NavLink href="/">Home</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/about" active={true}>About</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink href="/info">Info</NavLink>
                        </NavItem>
                    </Nav>

                    <div className="row mt-3">
                        <Switch>
                            <Route path="/" exact component={WList} />
                            <Route path="/about" component={About} />
                            <Route path="/info" component={Info} />

                            <Route path="/page/:page*" component={WList} />

                            <Route path="/post/:slug*" component={Single} />
                        </Switch>
                    </div>

                    <ToastContainer
                        position="top-right"
                        autoClose={false}
                        newestOnTop
                        hideProgressBar
                        draggable
                    />
                </div>
            </BrowserRouter>
        )
  }
}

export default App;
