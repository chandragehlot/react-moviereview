import React from 'react';
import loginService from '../service/loginService.js'
import { Redirect, Link } from 'react-router-dom';

/*const LoginPage = ({match})=>(
	<div>
		<h1>Login Page Page url is {`${match.url}`}</h1>

	</div>
);*/

class LoginPage extends React.Component {
	state = {
		loginFlag : false
	};

	login = ()=>{
		loginService.doLogin(()=>{
			this.setState({
				loginFlag : true
			})
		});
	}

	render(){
		const { rooturl } = this.props.location.state || {rooturl: {pathname:"/"}};
		const isLoggedIn = this.state.loginFlag;

		if(isLoggedIn){
			return <Redirect to={rooturl}/>
		}
		return(		
			<div className="login-container">	
				<h3 className="pt-2 pb-3">Please login to Continue</h3>
				
				<input type="text" name="username" placeholder="UserName"/>
				<br></br>
				<br></br>
				
				<input type="password" name="userpassoword" placeholder="Password"/>
				<br></br>
				<br></br>
				<button type="button" value="loginbutton" name="loginbutton" onClick={this.login} >LogIn</button>

				<div className="mt-4">
					<p className="textCenter">
						Not Registered?
						 <span> <Link to="/signup"> SignUP </Link></span>
					</p>
				</div>
			</div>
		)
	}
}

export default LoginPage;