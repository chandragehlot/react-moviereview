

const initialState = {
	movieDetailsData: { moviedetail:null, errormsg:null, loadingstatus:false}
}

export default function(state=initialState,action){
	switch(action.type){
		case 'MOVIEWDETAIL_LOADINGSYM':
		return { ...state, movieDetailsData: { moviedetail:null, errormsg:null, loadingstatus:true}};
		case 'MOVIEWDETAIL_FETCHSTART':
		console.log('MOVIEWDETAIL_FETCHSTART');
		return { ...state, movieDetailsData: { moviedetail:null, errormsg:null, loadingstatus:true}};
		case 'MOVIEDETIAL_FETCHSUCCESS':
		console.log('MOVIEDETIAL_FETCHSUCCESS');
		return{ ...state, movieDetailsData: { moviedetail:action.payload, errormsg:null, loadingstatus:false}};
		case 'MOVIEDETIAL_FETCHFAIL':
		console.log('MOVIEDETIAL_FETCHFAIL');
		return{ ...state, movieDetailsData: { moviedetail:null, errormsg:action.payload, loadingstatus:false}};
		case 'MOVIEDETIAL_RESET':
		console.log('MOVIEDETIAL_RESET');
		return {...state, movieDetailsData: { moviedetail:null,errormsg:null,loadingstatus:false}};

		default:
		return state;
	}
}