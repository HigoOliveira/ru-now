import React, { Component, cloneElement } from 'react'
import 'whatwg-fetch';
import { browserHistory } from 'react-router'
import Dialog from 'material-ui/Dialog'
import AppLayout from '../layouts/AppLayout'
import FlatButton from 'material-ui/FlatButton';

export default class AppContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loginOpen: false,
			isLogged: false,
			userData: {},
			time: Date.now()
		}
	}

	componentWillMount() {
		const q = this.props.location.query;
		const token = q.access_token || localStorage.getItem('token');
		if(token) {
			localStorage.setItem('token', token);
			const userData = localStorage.getItem('userData');
			if( userData ) {
				browserHistory.push('/ru/1');
				this.setState({
					isLogged: true,
					userData: JSON.parse(userData)
				});
			} else if( !userData ) {
				console.log(q.url_pic);
				const dataFromQuery = {
					avatar: q.url_pic,
					profileUrl: q.profileUrl,
					first_name: q.name,
					id: q.id
				}
				localStorage.setItem('userData', JSON.stringify(dataFromQuery));
				// const userData = localStorage.getItem('userData');
				this.setState({
					isLogged: true,
					userData: dataFromQuery
					// userData: JSON.parse(userData)
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
		const appUrl = window.location.host;
		const { isLogged } = this.state;
		if(!isLogged) {
			location.assign(`${appUrl}/api/auth/facebook`);
		} else {
			this.setState({
				isLogged: false,
				userData: {}
			})
			localStorage.removeItem('token');
			localStorage.removeItem('userData');
			location.assign(`${appUrl}/api/auth/logout`);
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
