export const SignUpFormConfig = {
			email : [
					{ validation : "require", errmsg : "Email Required"},
					{ validation : "email", errmsg : "Email is not valid" }
				],
			name : [
					{ validation: "require", errmsg: "Name Required"}
				],
			password : [
					{validation:"require",errmsg : "Password Required"}
				],
			userid : [
					{validation : "require", errmsg: "User ID is Required" },
					{ validation : "async", errmsg: "User ID already exist"}
			]
	};


//url: 'checkUserNameDuplicate'