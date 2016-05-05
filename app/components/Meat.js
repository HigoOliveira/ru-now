import React, { Component } from 'react';

import IconButton from 'material-ui/IconButton';

import ThumbsUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbsDown from 'material-ui/svg-icons/action/thumb-down';


class Meat extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	checkUserLogged  = () => {
		const { isLogged, handleOpen} = this.props;

		if( isLogged )
		{
			alert("usuario logado")
		}
		else
		{
			handleOpen();
		}
	}

	render() {
		
		return	(
			<div>
				O que você me diz, tem 
				<IconButton onTouchTap={this.checkUserLogged} >
					<ThumbsUp />
				</IconButton>
				ou
				<IconButton onTouchTap={this.checkUserLogged} >
					<ThumbsDown />
				</IconButton>
				não tem carne?
		      
		    </div>
		)
	}

}

export default Meat