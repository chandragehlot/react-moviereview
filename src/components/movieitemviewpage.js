import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchMovieDetailsById,fetchMovieDetailSuccess,fetchMovieDetailFail,showloadingsymbol,resetMovieDetails} from '../actions/action_movieitemview.js';


const mapStateToProps = (state)=>{
	return {
		moviedetial: state.moviedetailreducer.movieDetailsData.moviedetail,
		errmsg: state.moviedetailreducer.movieDetailsData.errmsg,
		loadingstatus:state.moviedetailreducer.movieDetailsData.loadingstatus
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchmoviedetails : (movieid)=>{
			dispatch(showloadingsymbol());
			dispatch(fetchMovieDetailsById(movieid)).then((response)=>{
				console.log("response",response);
				dispatch(fetchMovieDetailSuccess(response.payload.data));
			}).catch((err)=>{
				dispatch(fetchMovieDetailFail(err));
			});
		},
		resetpagedata : ()=>{
			dispatch(resetMovieDetails());
		}
	}
}

class MovieItemViewPage extends React.Component {

	componentWillMount(){
		const {match} = this.props;
		const movieid = match.params.id;
		this.loadmoviedetail(movieid);		
	}
	componentWillUmount(){
		this.props.resetpagedata();
	}

	loadmoviedetail(movieid){
		this.props.fetchmoviedetails(movieid);
	}

	generateDetailTemplate(moviedetial){
		return (
				<div>
					<div className="add-review-cont">
						<Link to="/addreview">Add review </Link>
					</div>
					<div className="head-section">
						<div className="row resetMargin">
							<div className="col-10 movie-name"> {moviedetial.movieName}  </div>
							<div className="col-2 rating">{moviedetial.rating}/10</div>
							<div className="col-12 gener">  {moviedetial.movieGeners}      </div>
						</div>
					</div>
					<div className="movie-img-section">
						<img src={require("../images/dummyimgbanner.jpeg")} alt="movie-banner" />
					</div>
					<div className="detail-section row resetMargin">
						<div className="col-9 text-left">
							<div className="item">  <span><b> director : </b></span> {moviedetial.director} </div>
							<div className="item">  <span><b> Cast : </b><span>{moviedetial.LeadActors} ,  {moviedetial.LeadActress} </span></span></div>
							<div className="item"> <span> <b>Release country : </b><span>{moviedetial.countryOfRelease}  </span></span></div>
						</div>
						<div className="col-3">
							<div className="item"><b> Relese Year: </b> {moviedetial.YearOfRelese}   </div>
						</div>
						<div className="col-12">
							<div className="item">
								<span><b>Story  :</b></span>   {moviedetial.movieStory}
							</div>
						</div>
					</div>
				</div>
			)
	}

	showloadingicon(){
		return(
			<div className="loading-model-cont">
				<div className="loading-symb-cont">
					<div className="loading-symbol">
						<img src={require('../images/loading-icon.png')} alt="loading-spinner" />
					</div>
				</div>
			</div>
		)
	}
	render(){		
		const {moviedetial, loadingstatus ,errmsg} = this.props

		return(
			<div className="moviedetail-page page-container-mid">
				{(loadingstatus)?this.showloadingicon():""}
				<div className="movie-detail-container">
					{(moviedetial)?this.generateDetailTemplate(moviedetial):""}
				</div>
			</div>
		);	
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(MovieItemViewPage);