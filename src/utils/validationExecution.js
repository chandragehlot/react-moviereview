import { validationMethodHash } from './validCommonMethods';

export function executeValidation(name,value,methodArr,oldstate){
	var msgArr = [],
	isInValid = false,
	methodArrItem = methodArr[name],
	asyncCalledflag = false,
	methodArrLenth = methodArr[name].length;

	return new Promise((resolve,reject)=>{

		const returnResult = ()=>{
			var result = {
				errorMsg :  {
					[name] : msgArr[0]
				},
				[name] : isInValid
			}
			resolve(result);
		
		};
		const defaultresponse = ()=>{
			isInValid = false;
			returnResult();
		};
	
		const addDefaultToMethodArr = (Arr)=>{
			Arr.push({ validation : 'default', errmsg : ""});
			return Arr;
		}
		methodArrItem = addDefaultToMethodArr(methodArrItem);

		methodArrItem.find((fieldObj,index)=>{
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
	});
}