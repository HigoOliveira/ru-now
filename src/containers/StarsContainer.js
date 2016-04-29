import React, { Component } from 'react'
import Stars from '../components/Stars'

export default class StarsContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			media: '',
			votoUsuario: ''
		}
	}

	render() {
		return	(
			<Stars {...this.state}></Stars>
		)
	}
}