import React, { Component } from 'react';

export default class Create extends Component {
    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Study</h3>
                <form>
                    <div className="form-group">
                        <label>Study Name:  </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Principal Investigator: </label>
                        <input type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>Study Objective: </label>
                        <input type="text" className="form-control"/>
                    </div>
					<div>
						<div className="form-group">
							<label>Study Currently Running: </label>
							<input type="text" className="form-control"></input>
						</div>
					</div>
                    <div className="form-group">
                        <input type="submit" value="Add Study" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}