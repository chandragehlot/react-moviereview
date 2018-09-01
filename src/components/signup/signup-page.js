import React from 'react';
import {executeValidation} from '../../utils/validationExecution.js';
import { SignUpFormConfig } from './signup-form-config.js';


class SignUpPage extends React.Component{
	constructor(){
		super();
	}

	handleFormSubmit = (e)=>{
		e.preventDefault();
		alert(new FormData(e.target.data));
	}

	handleOnChange = (event)=>{
		const value = event.target.value;
		const name = event.target.name;
		executeValidation(name, value, SignUpFormConfig).then((updatedFormConfig)=>{
			this.props.dispatchOnFieldUpdate(updatedFormConfig);
			//this.setState({...updatedStateData});
		});
	}

	render(){
		const Err = this.props.signupformdata;
		return(
			<div className="row justify-content-center">
				<div className="col-lg-4 col-md-5 col-sm-10 p-5 mt-4 border">
				<h4> Registration </h4>
				<form onSubmit={this.handleFormSubmit}>
					<div className="form-group text-left">
						<label className="font-weight-bold">Name</label>
					    <input type="text" className="form-control mt-1" name="username" id="Username" placeholder="Enter Username" autoComplete="off" onBlur={this.handleOnChange}/>
					    <div>{ Err.username && 
							(<div className="alert alert-danger" role="alert">
								{Err.errorMsg.username}
							</div>)}
						</div>
					</div>
					<div className="form-group text-left">
						<label className="font-weight-bold">Email</label>
					    <input type="email" className="form-control mt-1" name="email" id="Email" placeholder="Enter email" autoComplete="off" onBlur={this.handleOnChange.bind(this)}/>
					    <div>{ Err.email && (<div className="alert alert-danger" role="alert">{ Err.errorMsg.email }</div>)}</div>
					</div>
					<div className="form-group text-left">
						<label className="font-weight-bold">Password</label>
					    <input type="password" className="form-control mt-1"  name="password" autoComplete="off" id="Password" placeholder="Enter Password" onBlur={this.handleOnChange} />
					    <div>{ Err.password && <div className="alert alert-danger" role="alert">{ Err.errorMsg.password }</div>} </div>
					</div>					
					<button type="submit" className="btn btn-info btn-block btn-lg mt-4">Submit</button>
				</form>
				</div>
			</div>
		)
	}
}

export default SignUpPage;