import axios from 'axios';
import urlConfig from '../utils/urlconfig.js'

export function showloadingsymbol(){
	return {
		type:'MOVIEWDETAIL_LOADINGSYM',
		payload: ''
	}
}

export function fetchMovieDetailsById(movieid){
	const request = axios({
		method:'get',
		url:urlConfig.getMovieDetailsById(movieid),
		headers:[]
	});

	return {
		type:'MOVIEWDETAIL_FETCHSTART',
		payload:request
	}
}

export function fetchMovieDetailSuccess(moviedatailresponse){
	return {
		type:'MOVIEDETIAL_FETCHSUCCESS',
		payload:moviedatailresponse
	}
}

export function fetchMovieDetailFail(err){
	return {
		type:'MOVIEDETIAL_FETCHFAIL',
		payload:err
	}
}

export function resetMovieDetails(){
	return {
		type:'MOVIEDETIAL_RESET',
		payload:''
	}
}