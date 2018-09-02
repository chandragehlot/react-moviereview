import axios from 'axios';
import urlConfig from './urlconfig.js';

//Checking for validation
// if valid then return true
//if invalid then return false

export const validationMethodHash = {
		Required : (item,)=>{
			if(!item && item.length === 0){
				return false;
			}else{
				return true;
			}
		},
		email : (item,)=>{
			const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			if(regx.test(item)){
				return true;
			}else{
				return false;
			}
		},
		digits : (item,) =>{
			const regx = /^\d+$/;
			if(regx.test(item)){
				return true
			}else{
				return false
			}
		},
		async : (item, asyncurl)=>{
			var resData = axios({
				method:'get',
				url : urlConfig.checkUserNameDuplicate(item),
				headers:[]
			})
			return resData;
		},
		default : (item,)=>{
			return true;
		}
	}
