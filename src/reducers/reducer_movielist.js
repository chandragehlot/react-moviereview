

const initial_state = {
	movieListData : [], errormsg:null, loadingstatus:false
	
}

export default function(state = initial_state, action){
	switch(action.type){
		case "MOVIElIST_FETCHSTART2":
		console.log("loadingstatus: true");
		return { ...state, loadingstatus: true ,errormsg:null};

		case "MOVIElIST_FETCHSUCCESS":
		return { ...state, movieListData: action.payload, loadingstatus:false, errormsg:null };

		case "MOVIElIST_FETCHFAIL":
		return { ...state, errormsg:action.payload , loadingstatus:false};

		case "MOVIELIST_RESET":
		return {  ...state, movieListData : [], errormsg:null, loadingstatus:false}
		 
		default:
		return state;
	}
}