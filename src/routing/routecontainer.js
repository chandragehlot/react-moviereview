import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/header.js';
import HomePage from '../components/homepage.js';
import AboutUsPage from '../components/aboutuspage.js';
import LoginPage from '../components/loginpage.js';
import MovieGalleryPage from '../components/moviegallerypage.js';
import LoginGuardRoute from '../routing/loginGuardRoute.js';
import PageNotFound from '../components/pagenotfound.js';
import MovieItemViewPage from '../components/movieitemviewpage.js'

import SignUpContainer from '../components/signup/signup-container.js'

const RouteContainer = ()=>(
	<BrowserRouter>
		<div>
			<Header></Header>
			<div className="route-container">
				<Switch>
					<Route exact path="/" component={HomePage}></Route>
					<Route path="/aboutus" component={AboutUsPage}></Route>
					<Route path="/login" component={LoginPage}></Route>
					<LoginGuardRoute path="/moviegallery" component={MovieGalleryPage}></LoginGuardRoute>
					<Route path="/movieview/:id" component={MovieItemViewPage}/>
					<Route path="/signup" component={SignUpContainer}></Route>
					<Route component={PageNotFound} />
				</Switch>
			</div>
		</div>
	</BrowserRouter>
);


export default RouteContainer;