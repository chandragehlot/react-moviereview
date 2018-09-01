const loginService = {
	isAuthenicated :false,

	doLogin(cb){
		this.isAuthenicated = true;
		setTimeout(cb, 500);
	},

	doLogout(cb){
		this.isAuthenicated = false;
		setTimeout(cb, 500);
	}
};

export default loginService;