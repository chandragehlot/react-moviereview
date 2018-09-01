export const SignUpFormConfig = {
			email : [
					{ validation : "Required", errmsg : "Email Required"},
					{ validation : "email", errmsg : "Email is not valid" }
				],
			username : [
					{ validation: "Required", errmsg: "Username Required"},
					
					{ validation : "async", errmsg: "Username already exist", url: 'checkUserNameDuplicate'}
				],
			password : [
					{validation:"Required",errmsg : "Password Required"}
			]
	};