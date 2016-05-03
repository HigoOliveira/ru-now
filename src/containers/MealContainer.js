import React, { Component, cloneElement } from 'react'
import { browserHistory } from 'react-router';
import MealLayout from '../layouts/MealLayout'

export default class MealContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
      nextMeal: ''
		}
	}

	componentDidMount() {
    //Emulando um Ajax para nossa futura API
    setTimeout(() => {
      this.setState({
        nextMeal: '02-05-lunch'
      })
    }, 3000)
  }

  componentWillUpdate() {
    // const path = location.pathname;
    // if(path === '/ru' || path === '/ru/') {
    //   browserHistory.push(`/ru/${this.state.nextMeal}`)
    // } else if (path === '/mu' || path === '/mu/') {
    //   browserHistory.push(`/mu/${this.state.nextMeal}`)
    // }
  }


	render() {
		return	(
			<MealLayout {...this.state} />
		)
	}

}
