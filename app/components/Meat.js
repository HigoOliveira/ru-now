import React, { Component } from 'react';

import IconButton from 'material-ui/IconButton';

import ThumbsUp from 'material-ui/svg-icons/action/thumb-up';
import ThumbsDown from 'material-ui/svg-icons/action/thumb-down';


import 'whatwg-fetch';

class Meat extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}

	checkUserLogged  = () => {
		const { isLogged, handleOpen} = this.props;
		if( !isLogged )
		{
			handleOpen();
			return false;
		}
		return true;
	}

	handleVote = (vote) => {
		const userData = JSON.parse(localStorage.getItem('userData'));

		const url = 'http://localhost:8000/api/meat/vote';

		const { handleTouchTap, setSnackbarMessage } = this.props;

		fetch(url, { 
			method: 'POST',
			headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				vote: vote,
				userId: userData.id
			})
		}).then((res) => res.json()).then((j) => {

			

			console.log(this.props);

			if( j.error )
			{
				console.log(j.msg);
			}
			else
			{
				handleTouchTap();
				setSnackbarMessage(j.msg);
			}
		}).catch((err) => {console.log(err)});
	}

	voteYes = () => {
		if( this.checkUserLogged() )
			this.handleVote(true);
	}

	voteNo = () => {
		if( this.checkUserLogged() )
			this.handleVote(false);
	}

	render() {
		const date = new Date()
		return	(
			<div>
				Tem carne?
				<IconButton onTouchTap={this.voteYes} >
					<ThumbsUp />
				</IconButton>
				
				<IconButton onTouchTap={this.voteNo} >
					<ThumbsDown />
				</IconButton>
		      	
		    </div>
		)
	}

}

export default Meat