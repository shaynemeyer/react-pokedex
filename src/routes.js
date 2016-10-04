import React from 'react';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import BasePage from './components/BasePage';
import HomePage from './components/HomePage';
import PokePage from './components/PokePage';


export default (
	<Router history={browserHistory}>
		<Route path="/" component={BasePage}>
			<IndexRoute component={HomePage} />
			<Route path="/pokemon/:pid" component={PokePage} />
		</Route>
	</Router>
);