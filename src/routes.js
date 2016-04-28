import React from 'react'
import { Route, IndexRoute } from 'react-router'
import AppContainer from './containers/AppContainer'
import MealContainer from './containers/MealContainer'
import About from './components/About'
import NotFound from './components/NotFound'

export default (
	<Route component={AppContainer}>
		<Route path="/" component={MealContainer} />
		<Route path="/ru(/:nextMeal)" component={MealContainer} />
		<Route path="/mu(/:nextMeal)" component={MealContainer} />
		<Route path="/about" component={About} />
		<Route path="*" component={NotFound} />
	</Route>
)
