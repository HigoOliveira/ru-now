import React, { Component, cloneElement } from 'react'
import { browserHistory } from 'react-router'
import Dialog from 'material-ui/Dialog'
import AppLayout from '../layouts/AppLayout'
import FlatButton from 'material-ui/FlatButton';

//import FB from 'fb';

import 'whatwg-fetch';

export default class AppContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loginOpen: false,
			isLogged: false,
			userData: {
				name: false,
				token: false
			},
			time: Date.now()
		}
	}

	componentWillMount() {
		const q = this.props.location.query
		const token = q.access_token || localStorage.getItem('token');
		if(token) {
			localStorage.setItem('token', token);
			const userData = localStorage.getItem('userData');
			if( userData ) {
				browserHistory.push('/ru');
				this.setState({
					isLogged: true,
					userData: JSON.parse(userData)
				});
			} else if( !userData ) {
				const dataFromQuery = {
					avatar: `${q.avatar}&oe=${q.oe}&__gda__=${q.__gda__}`,
					profileUrl: q.profileUrl,
					first_name: q.name
				}
				localStorage.setItem('userData', JSON.stringify(dataFromQuery));
				const userData = localStorage.getItem('userData');
				this.setState({
					isLogged: true,
					userData: JSON.parse(userData)
				});
				browserHistory.push('/ru')
			}
		}
	}


	componentDidMount() {
		setInterval(this.tick, 5000);
	}

	handleOpen = () => {
    this.setState({loginOpen: true});
  };

  handleClose = () => {
    this.setState({loginOpen: false});
  };

	handleLogin = () => {
		const { isLogged } = this.state;
		if(!isLogged) {
			location.assign('http://localhost:8001/auth/facebook');
		} else {
			localStorage.removeItem('token');
			localStorage.removeItem('userData');
			location.assign('http://localhost:8001/auth/logout');
		}
	}

	render() {
		const { isLogged, userData } = this.state;
		const loginText = isLogged ? "Logout" : "Login"
		const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label={loginText}
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleLogin}
      />,
    ];
		return	(
			<AppLayout {...this.state} handleClose={this.handleClose} handleOpen={this.handleOpen} handleLogin={this.handleLogin}>
				{ cloneElement(this.props.children, {...this.state})}
				<Dialog
          title="Facebook Login"
          actions={actions}
          modal={false}
          open={this.state.loginOpen}
          onRequestClose={this.handleClose}
        >
          É necessário fazer o login com o Facebook.
        </Dialog>
			</AppLayout>
		)
	}

	tick = () => {
    	this.setState({
    		time: Date.now()
    	})
  	}
}
