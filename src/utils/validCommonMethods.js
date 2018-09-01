import axios from 'axios';
import urlConfig from './urlconfig.js';

export const validationMethodHash = {
		Required : (item,)=>{
			return (!item && item.length === 0)? true : false;
		},
		email : (item,)=>{
			const regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			return (!regx.test(item))? true : false;
		},
		digits : (item,) =>{
			const regx = /^\d+$/;
			return (!regx.test(item))? true : false;
		},
		async : (item, asyncurl)=>{
			var resData = axios({
				method:'get',
				url : urlConfig.checkUserNameDuplicate(item),
				headers:[]
			})
			return resData;
		}
	}
