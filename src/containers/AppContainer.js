import React, { Component, cloneElement } from 'react'
import AppLayout from '../layouts/AppLayout'

export default class AppContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isLogged: true,
			userData: {
				name: 'Adolfo da Silva'
			},
			time: Date.now()
		}
	}

	componentDidMount() {
		setInterval(this.tick, 5000);
	}

	render() {
		return	(
			<AppLayout {...this.state}>
				{ cloneElement(this.props.children, {...this.state}) }
			</AppLayout>
		)
	}

	tick = () => {
    	this.setState({
    		time: Date.now()
    	})
  	}
}
