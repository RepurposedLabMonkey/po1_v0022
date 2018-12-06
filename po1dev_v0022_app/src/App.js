import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import './App.css';

// import Create from './components/create.component.js';
import Edit from './components/edit.component.js';
import Index from './components/index.component.js';

//code for step 4 (adding states for the form)
export default class Create extends Component{
	//the constructor creates the state variables
	constructor(props){
		super(props);
		this.onChangeNameStudy = this.onChangeNameStudy.bind(this);
		this.onChangeLabStudy = this.onChangeLabStudy.bind(this);
		this.onChangeObjectiveStudy = this.onChangeObjectiveStudy.bind(this);
		this.onChangeActiveStudy = this.onChangeActiveStudy.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

		this.state = {
			name_study: '',
			lab_study: '',
			objective_study: '',
			active_study: '',
		}
	}

	//these detect the events (text inputs) and store them in the state
	onChangeNameStudy(e) { //tied to an event
		this.setState ({
			name_study: e.target.value
		});
	}
	onChangeLabStudy(e) {
		this.setState ({
			lab_study: e.target.value
		});
	}
	onChangeObjectiveStudy(e) {
		this.setState ({ 
			objective_study: e.target.value
		});
	}
	onChangeActiveStudy(e) {
		this.setState ({
			active_study: e.target.value
		});
	}
	//ths one collects the data ready for submission to the database
	//also clears the form following 'submission'
	onSubmit(e) {
		e.preventDefault();
		console.log(`The values are ${this.state.name_study}, ${this.state.lab_study},
			${this.state.objective_study} and ${this.state.active_study}`);
		this.setState ({
			name_study: '',
			lab_study: '',
			objective_study: '',
			active_study: ''
		})	
	}

	//render the create form, linking it to the state events
	render() {
		return(
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
									<Link to={'/Index'} className="nav-link">Index</Link>
								</li>
							</ul>
						</div>
					</nav><br/>
					<h2>PO1 development build v0.0.2.2</h2><br/>
					<h3>Add New Study</h3>
						<form onSubmit={this.onSubmit}>
							<div className="form-group">
								<label>Study Name:</label>
								<input
									type="text"
									className="form-control"
									value={this.state.name_study}
									onChange={this.onChangeNameStudy}
								/>
							</div>
							<div className="form-group">
								<label>Principal Investigator: </label>
								<input
									type="text"
									className="form-control"
									value={this.state.lab_study}
									onChange={this.onChangeLabStudy}
								/>	
							</div>
							<div className="form-group">
								<label>Study Objective: </label>
								<input
									type="text"
									className="form-control"
									value={this.state.objective_study}
									onChange={this.onChangeObjectiveStudy}
								/>	
							</div>
							<div className="form-group">
								<label>Study Currently Running: </label>
								<input
									type="text"
									className="form-control"
									value={this.state.active_study}
									onChange={this.onChangeActiveStudy}
								/>	
							</div>
							<div className="form-group">
								<input	
									type="submit"
									value="Add Study"
									className="btn btn-primary"
								/>	
							</div>
						</form>				
				</div>
			</Router>	
		)
	}
}

//working code pre step #4
// class App extends Component {
// 	render() {
// 		return (
// 			<Router>
// 				<div className="container">
// 					<nav className="navbar navbar-expand-lg navbar-light bg-light">
// 						<Link to={'/'} className="navbar-brand">PO1 v0.0.2.2</Link>
// 						<div className="collapse navbar-collapse" id="navbarSupportedContent">
// 							<ul className="navbar-nav mr-auto">
// 								<li className="nav-item">
// 									<Link to={'/'} className="nav-link">Home</Link>
// 								</li>
// 								<li className="nav-item">
// 									<Link to={'/create'} className="nav-link">Create</Link>
// 								</li>
// 								<li className="nav-item">
// 									<Link to={'/index'} className="nav-link">Index</Link>
// 								</li>
// 							</ul>
// 						</div>
// 					</nav> <br/>
// 					<h2>PO1 development build v0.0.2.2</h2> <br/>
// 					<Switch>
// 							<Route exact path='/create' component={ Create } />
// 							<Route path='/edit/:id' component={ Edit } />
// 							<Route path='/index' component={ Index } />
// 					</Switch>
// 				</div>
// 			</Router>
// 		);
// 	}
// }

// export default App;
