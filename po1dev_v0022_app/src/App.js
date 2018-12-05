import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import './App.css';

import Create from './components/create.component.js';
import Edit from './components/edit.component.js';
import Index from './components/index.component.js';


class App extends Component {
	render() {
		return (
			<Router>
				<div className="container">
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<Link to={'/'} className="navbar-brand">PO1 v0.0.2.2</Link>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item">
									<Link to={'/'} className="nav-link">Home</Link>
								</li>
								<li className="nav-item">
									<Link to={'/create'} className="nav-link">Create</Link>
								</li>
								<li className="nav-item">
									<Link to={'/index'} className="nav-link">Index</Link>
								</li>
							</ul>
						</div>
					</nav> <br/>
					<h2>PO1 development build v0.0.2.2</h2> <br/>
					<Switch>
							<Route exact path='/create' component={ Create } />
							<Route path='/edit/:id' component={ Edit } />
							<Route path='/index' component={ Index } />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
