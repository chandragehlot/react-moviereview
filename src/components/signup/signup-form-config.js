export const SignUpFormConfig = {
			email : [
					{ validation : "Required", errmsg : "Email Required"},
					{ validation : "email", errmsg : "Email is not valid" },
					{ validation : 'default', errmsg : ""}
				],
			username : [
					{ validation: "Required", errmsg: "Username Required"},
					
					{ validation : "async", errmsg: "Username already exist", url: 'checkUserNameDuplicate'},
					{ validation : 'default', errmsg : ""}
				],
			password : [
					{validation:"Required",errmsg : "Password Required"},
					{ validation : 'default', errmsg : ""}
			]
	};