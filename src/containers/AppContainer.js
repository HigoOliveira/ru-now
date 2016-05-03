import React, { Component, cloneElement } from 'react'
import { browserHistory } from 'react-router'
import Dialog from 'material-ui/Dialog'
import AppLayout from '../layouts/AppLayout'
import FlatButton from 'material-ui/FlatButton';
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

	componentDidMount() {

		const token = this.props.location.query.access_token;
		if(token) {
			fetch(`https://graph.facebook.com/me?fields=name&access_token=${token}`)
			.then((id) => {
				console.log(id);
				this.setState({
					isLogged: true,
					userData: {
						name: 'Juca do Gas',
						id
					}
				});
				browserHistory.push('/ru')
			})
			.catch((error) => {
				console.log("ERROR ON FACEBOOK FETCH ID: ", error);
			})
		}
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
		if(isLogged) {
			location.assign('http://localhost:8001/auth/facebook');
		} else {
			location.assign('http://localhost:8001/logout');
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
			<AppLayout {...this.state} handleClose={this.handleClose} handleOpen={this.handleOpen}>
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
