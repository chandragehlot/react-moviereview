import React from 'react';
import {Route , Redirect} from 'react-router-dom';
import loginService from '../service/loginService.js';


const LoginGuardRoute = ({component:PassedComponent, ...restprops})=>(
	<Route {...restprops}
	render={props=>(loginService.isAuthenicated)?<PassedComponent {...props} />:<Redirect to={{pathname : "/login", state:{rooturl:props.location}}} />} />

);

export default LoginGuardRoute;