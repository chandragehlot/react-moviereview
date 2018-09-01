const urlConfig = {
	getMovieList : `http://localhost:9000/cinemagallery/getmovielist`,
	getMovieDetailsById : (movieid)=>{
		return `http://localhost:9000/cinemagallery/getmoviedetail/byid/${movieid}`
	},
	checkUserNameDuplicate : (username)=>{
		return `http://localhost:9000/cinemagallery/checkusername/duplicate/${username}`
	}
}

export default urlConfig;