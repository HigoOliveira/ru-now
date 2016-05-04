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
      this.props.handleLogin();
    } else {
      browserHistory.push(value)
    }

  }

  render() {
    const { userData, isLogged } = this.props;
    const loginText = isLogged ? "Logout" : "Facebook Login"
    const userInfo = <div style={{marginLeft: 25}} ><a href={userData.profileUrl}><Avatar src={userData.avatar} /><span>Olá {userData.first_name}</span></a></div>
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true}>
          <LineContainer />
        </ToolbarGroup>
        <ToolbarGroup>
          <DropDownMenu value={this.state.value} onChange={this.handleChange}>
            <MenuItem value={'/ru'} primaryText="Restaurante Universitário"/>
            <MenuItem value={'/mu'} primaryText="Restaurante Espaço Multiuso"/>
            <MenuItem value={'login'} primaryText={loginText}/>
            <MenuItem value={'/about'} primaryText="Sobre o app" />
            {isLogged ? userInfo : <span></span>}
          </DropDownMenu>
        </ToolbarGroup>
      </Toolbar>
    );
  }
}
