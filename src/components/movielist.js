import React from 'react';
import { Link } from 'react-router-dom';

class MovieList extends React.Component{


	rendermovielist(movielist){
		return movielist.map((movieitem,index)=>{
			return(
				<div className="resetPadding col-6" key={index}>
				
					<div className="movielist-item">
					<Link  to={`movieview/${movieitem.movieid}`}>
						<div className="item-heading">{movieitem.movieName}</div>
						<div className="resetMargin subsec-cont row">
							<div className="subsec1 col-4">{movieitem.movieGeners}</div>
							<div className="subsec2 col-4">{movieitem.YearOfRelese}</div>
							<div className="subsec3 col-4"> {movieitem.rating} star</div>
						</div>
						</Link>
					</div>
				
				</div>
			)
		});
	}

	render(){
		const {movielist} = this.props;
		return(
			<div className="row resetMargin">
				{(movielist.length)?this.rendermovielist(movielist):""}
			</div>
		);
	}
}


export default MovieList;