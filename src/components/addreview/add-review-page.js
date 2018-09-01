import React from 'react';
import {executeValidation} from '../../utils/validationExecution.js';

class AddReviewPage extends React.Component{
	constructor(){
		super();
		this.state = {
			formvalid : true,
			email : false,
			password : false,
			username: false,
			errorMsg : {
				
			}
		}
	}

	methodArr = {
			email : [
					{ validation : "Required", errmsg : "Email Required"},
					{ validation : "email", errmsg : "Email is not valid" }
				],
			username : [
					{ validation: "Required", errmsg: "Username Required"},
					
					{ validation : "async", errmsg: "Username already exist", url: 'checkUserNameDuplicate'}
				],
			password : [
					{validation:"Required",errmsg : "Password Required"}
			]
	};


	handleOnChange = (event)=>{
		const value = event.target.value;
		const name = event.target.name;
		executeValidation(name, value, this.methodArr,this.state).then((updatedStateData)=>{
			this.setState({...updatedStateData});
		});
	}


	handleFormSubmit = (e)=>{
		e.preventDefault();
		alert(new FormData(e.target.data));
	}

	render(){
		const Err = this.state;
		return(
			<div className="row justify-content-center">
				<div className="col-lg-4 col-md-5 col-sm-10 p-5 mt-4 border border-secondary">
				<form onSubmit={this.handleFormSubmit}>
					<div className="form-group">
					    <input type="text" className="form-control mt-4" name="username" id="Username" placeholder="Enter Username" autoComplete="off" onBlur={this.handleOnChange}/>
					    <div>{ Err.errorMsg.username && 
							(<div className="alert alert-danger" role="alert">
							  {Err.errorMsg.username}
							</div>)}
					    </div>
					</div>
					<div className="form-group">
					    <input type="email" className="form-control mt-4" name="email" id="Email" placeholder="Enter email" autoComplete="off" onBlur={this.handleOnChange.bind(this)}/>
					    <div>{ Err.email && (<div className="alert alert-danger" role="alert">{ Err.errorMsg.email }</div>)}</div>
					</div>
					<div className="form-group">
					    <input type="password" className="form-control mt-4"  name="password" autoComplete="off" id="Password" placeholder="Enter Password" onBlur={this.handleOnChange} />
					    <div>{ Err.password && <div className="alert alert-danger" role="alert">{ Err.errorMsg.password }</div>} </div>
					</div>
					<button type="submit" className="btn btn-success btn-block btn-lg">Submit</button>
				</form>
				</div>
			</div>
		)
	}
}

export default AddReviewPage;