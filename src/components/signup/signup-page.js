import React from 'react';
import {executeValidation} from '../../utils/validationExecution.js';
import { SignUpFormConfig } from './signup-form-config.js';


class SignUpPage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			formDirty: false
		}
		this.dirtyFieldObj = {
			email : false,
			password : false,
			name: false,
			userid:false
		}
	}
	handleFormSubmit = (e)=>{
		e.preventDefault();
		alert(new FormData(e.target.data));
	}
	handleDirtyCheking = (fieldname)=>{
		if(!this.dirtyFieldObj[fieldname]){
			this.dirtyFieldObj[fieldname] = true;
		}
		var dirtyflag = Object.keys(this.dirtyFieldObj).every((key)=>{
			return this.dirtyFieldObj[key] == true;
		});
		if(dirtyflag){
			this.setState({
				formDirty : true
			});
		}
	}

	handleOnFieldBlur = (event)=>{
		const value = event.target.value;
		const name = event.target.name;
		this.handleDirtyCheking(name);
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
					    <input type="text" className="form-control mt-1" name="name" id="Name" placeholder="Enter Your Name" autoComplete="off" onBlur={this.handleOnFieldBlur}/>
					    <div>{ Err.name && 
							(<div className="alert alert-danger" role="alert">
								{Err.errorMsg.name}
							</div>)}
						</div>
					</div>
					<div className="form-group text-left">
						<label className="font-weight-bold">User ID</label>
					    <input type="text" className="form-control mt-1" name="userid" id="Userid" placeholder="Enter User ID" autoComplete="off" onBlur={this.handleOnFieldBlur}/>
					    <div>{ Err.userid && 
							(<div className="alert alert-danger" role="alert">
								{Err.errorMsg.userid}
							</div>)}
						</div>
					</div>					
					<div className="form-group text-left">
						<label className="font-weight-bold">Email</label>
					    <input type="email" className="form-control mt-1" name="email" id="Email" placeholder="Enter email" autoComplete="off" onBlur={this.handleOnFieldBlur.bind(this)}/>
					    <div>{ Err.email && (<div className="alert alert-danger" role="alert">{ Err.errorMsg.email }</div>)}</div>
					</div>
					<div className="form-group text-left">
						<label className="font-weight-bold">Password</label>
					    <input type="password" className="form-control mt-1"  name="password" autoComplete="off" id="Password" placeholder="Enter Password" onBlur={this.handleOnFieldBlur} />
					    <div>{ Err.password && <div className="alert alert-danger" role="alert">{ Err.errorMsg.password }</div>} </div>
					</div>					
					<button type="submit" className="btn btn-info btn-block btn-lg mt-4" disabled={ !(this.state.formDirty && Err.formvalid) }>Sign Up</button>
				</form>
				</div>
			</div>
		)
	}
}

export default SignUpPage;