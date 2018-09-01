import React from 'react';
import {connect} from 'react-redux';
import { fetchMovieList,fetchMovieListSuccess,fetchMovieListFail,loadingSymbolShow,resetmovieliststate } from  '../actions/action_movielist.js'
import MovieList from './movielist';

const mapStateToProps = (state)=>{
	return{
		loadingstatus : state.movielistreducer.loadingstatus,
		errmsg: state.movielistreducer.errormsg,
		movieListData: state.movielistreducer.movieListData
	}
}

const mapDispatchToProps = (dispatch) =>{
	return{
		loadMovieList : ()=>{
			dispatch(loadingSymbolShow());
			dispatch(fetchMovieList()).then((response_data)=>{
				dispatch(fetchMovieListSuccess(response_data.payload.data))

			}).catch((err)=>{
				dispatch(fetchMovieListFail(err))
			});	
		},
		resetmovieListState: ()=>{
			dispatch(resetmovieliststate());
		}
	}
}


class MovieGalleryPage extends React.Component{
	componentDidMount(){
		this.loadMovieList()
	}
	loadMovieList = ()=>{
		this.props.loadMovieList()
	}
	componentWillUnmount(){
		this.props.resetmovieListState()
	}

	render(){
		const { loadingstatus,errmsg, movieListData } = this.props;

		if(loadingstatus){
			return (
				<div className="loading-model-cont">
					<div className="loading-symb-cont">
						<div className="loading-symbol">
							<img src={require('../images/loading-icon.png')} alt="loading-spinner" />
						</div>
					</div>
				</div>
			)
		}
		return(
		<div className="moviegallery-page page-container-mid">
			<div className="movie-list-section">
				<div className="movie-list-heading">MovieGallery</div>
				{(errmsg)?<div><p>Some thing went wrong with web service</p></div>:""}
				{(movieListData.length)?<MovieList movielist = {movieListData}></MovieList>:""}
			</div>
		</div>
		)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieGalleryPage);