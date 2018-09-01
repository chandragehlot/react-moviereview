import axios from 'axios';
import urlConfig from '../utils/urlconfig.js';


export function loadingSymbolShow(){
	return {
		type: 'MOVIElIST_FETCHSTART2',
		payload:""
	}
}

export function fetchMovieList(){
	
	const request = axios({
		method:'get',
		url :  urlConfig.getMovieList,
		headers:[]
	});
	
	return {
		type: 'MOVIElIST_FETCHSTART',
		payload:request
	}
}

export function fetchMovieListSuccess(data1){
	return {
		type: 'MOVIElIST_FETCHSUCCESS',
		payload: data1
	}
}

export function fetchMovieListFail(err){
	return {
		type: 'MOVIElIST_FETCHFAIL',
		payload:err
	}
}

export function resetmovieliststate(){
	return {
		type: 'MOVIELIST_RESET',
		payload:""
	}
}