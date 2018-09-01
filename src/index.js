import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,combineReducers, compose } from 'redux';

import moviedetailreducer from './reducers/reducer_moviedetail.js';
import movielistreducer from './reducers/reducer_movielist.js';
import signinupreducer from './reducers/reducer_signinup.js';

import reduxpromise from 'redux-promise';
import 'bootstrap/dist/css/bootstrap.min.css';

/*const customstore = createStore(
	combineReducers({
		movielistreducer:movielistreducer,
		moviedetailreducer : moviedetailreducer
	}), 
	applyMiddleware(reduxpromise),
	window.devToolsExtension ? window.devToolsExtension() : f => f
	);*/

  const finalCreateStore = compose(
    applyMiddleware(reduxpromise),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const customstore = finalCreateStore(
	combineReducers({
		movielistreducer:movielistreducer,
		moviedetailreducer : moviedetailreducer,
		signinupreducer : signinupreducer
	}));

ReactDOM.render(
	<Provider store={customstore}>
		<App />
	</Provider>, 
	document.getElementById('root')
);
