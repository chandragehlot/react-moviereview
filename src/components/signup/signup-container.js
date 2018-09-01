import React from 'react';
import {connect} from 'react-redux';
import SignUpPage  from './signup-page.js';
import { updateSignUpField } from '../../actions/action_signinup.js';

const mapStateToProps = (state)=>{
	return {
		signupformdata : state.signinupreducer.signUpData
	}
}

const mapDispatchToProps = (dispatch) =>{
	return {
		dispatchOnFieldUpdate : (fielddata)=>{
			dispatch(updateSignUpField(fielddata));
		}
	}

}


export default connect(mapStateToProps,mapDispatchToProps)(SignUpPage);