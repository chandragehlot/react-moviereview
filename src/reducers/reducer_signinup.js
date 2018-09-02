
const initial_state = {
	signUpData : {
		formvalid : true,
		email : false,
		password : false,
		name: false,
		userid:false,
		errorMsg : {
				
		}		
	}
}

export default function(state = initial_state, action){
	switch(action.type){
		case "SIGNUP_FILEDUPDATE":
		return { ...state,signUpData: {...state.signUpData,...action.payload,errorMsg:{ ...state.signUpData.errorMsg, ...action.payload.errorMsg}} };

		default:
		return state;
	}
}