// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Biograghy from './content/biograghy';
import Art from './content/art';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <h2>About Nero</h2>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <ul className="navbar-nav mr-auto">
                            <li><Link to={'/'} className="nav-link"> Biograghy </Link></li>
                            <li><Link to={'/art'} className="nav-link">Art</Link></li>
                        </ul>
                    </nav>
                    <hr />
                    <Switch>
                        <Route exact path='/' component={Biograghy} />
                        <Route path='/art' component={Art} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
