import React from 'react';
import {Link,withRouter} from 'react-router-dom';
import '../style/header.css';
import loginService from '../service/loginService.js';

class Header extends React.Component{

	HandleLogout=()=>{

		loginService.doLogout(()=>{
			this.props.history.push("/login")
		});
	};

	render(){
		
		return(
			<div>
				<header className="App-header">
					
						<div className="row">
							<div className="col-1">
								<div className="App-logo"> 
									<img className="img-basic" src={require("../images/app-icon.png")} alt="logo"/>
								</div>
							</div>
							<div className="col-9"><h1 className="App-title">CINEMA GALIYARA</h1> </div>
							<div className="col-2">
								{(loginService.isAuthenicated)?<button type="button" className="logout-btn" onClick={this.HandleLogout} name="logout"> Logout </button>:<div></div>}
							</div>
						</div>
								
				</header>
				<div className="menubar-container">
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/aboutus/4">About Us</Link></li>
						<li><Link to="/moviegallery">Movie Gallery</Link></li>
					</ul>
				</div>
			</div>
		)
	}
}

export default withRouter(Header);