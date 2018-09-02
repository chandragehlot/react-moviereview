import { validationMethodHash } from './validCommonMethods';

export function executeValidation(name,value,methodArr,oldstate){
	var msgArr = [], isInValid = false,methodArrLenth = methodArr[name].length, asyncCalledflag = false;
	return new Promise((resolve,reject)=>{
		methodArr[name].find((fieldObj,index)=>{
			if(fieldObj['validation'] === 'async'){
				asyncCalledflag = true;
				validationMethodHash[fieldObj['validation']](value,fieldObj['url']).then((resData)=>{
					let userexist = resData.data.userexist;
					if(userexist){
						isInValid = userexist; 
						msgArr.push(fieldObj['errmsg'])
						returnResult();
						return true;
					}else{
						defaultresponse()
					}
				})
			}else{
				if(!validationMethodHash[fieldObj['validation']](value)){
					isInValid = true;
					msgArr.push(fieldObj['errmsg']);
					returnResult();
					return true;
				}
				if(index === (methodArrLenth-1) && !asyncCalledflag){
					defaultresponse()
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
		function defaultresponse(){
			isInValid = false;
			returnResult();
		}
	});
}