import { validationMethodHash } from './validCommonMethods';

export function executeValidation(name,value,methodArr,oldstate){
	var msgArr = [], isInValid = false;

	return new Promise((resolve,reject)=>{
		methodArr[name].find((fieldObj,index)=>{
			if(fieldObj['validation'] === 'async'){
				validationMethodHash[fieldObj['validation']](value,fieldObj['url']).then((resData)=>{
					
					let userexist = resData.data.userexist;
					if(userexist){
						isInValid = userexist; 
						msgArr.push(fieldObj['errmsg'])
					}
					returnResult();
					return true;
				})
			}else{
				if(validationMethodHash[fieldObj['validation']](value)){
					isInValid = true;
					msgArr.push(fieldObj['errmsg']);
					returnResult();
					return true;
				}else{
					isInValid = true;
				}
			}
		});

		function returnResult(){
				var result = {
					errorMsg :  {
						[name] : msgArr[0]
					},
					[name] : isInValid
				}
				resolve(result);
			
		}
	});
}