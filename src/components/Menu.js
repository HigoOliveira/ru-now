import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import { browserHistory } from 'react-router'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import LineContainer from '../containers/LineContainer'

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {value: '/ru'};
  }

  handleChange = (event, index, value) => {
    if(value === 'login') {
      this.props.handleOpen();
    } else {
      this.setState({value});
      browserHistory.push(value)
    }

  }

  render() {
    const { userData, isLogged } = this.props;
    const loginText = isLogged ? "Logout" : "Facebook Login"
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <LineContainer />
        </ToolbarGroup>
        <ToolbarGroup>
          <div style={{paddingTop: 10}}>
          {isLogged ? <Avatar src="http://lorempixel.com/80/80/people" /> : <a href="http://localhost:8001/auth/facebook">login</a>}
          </div>
        </ToolbarGroup>
        <ToolbarGroup>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={'/ru'} primaryText="Restaurante Universitário"/>
            <MenuItem value={'/mu'} primaryText="Restaurante Espaço Multiuso"/>
            <MenuItem value={'login'} primaryText={loginText}/>
            <MenuItem value={'/about'} primaryText="Sobre o app" />
          </DropDownMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
