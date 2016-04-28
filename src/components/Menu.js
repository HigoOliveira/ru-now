import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { browserHistory } from 'react-router'

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {value: '/ru'};
  }

  handleChange = (event, index, value) => {
    this.setState({value});
    browserHistory.push(value)
  }

  render() {
    return (
      <DropDownMenu value={this.state.value} onChange={this.handleChange}>
        <MenuItem value={'/ru'} primaryText="Restaurante Universitário"/>
        <MenuItem value={'/mu'} primaryText="Restaurante Espaço Multiuso"/>
        <MenuItem value={'/login'} primaryText="Login/Cadastrar"/>
        <MenuItem value={'/about'} primaryText="Sobre o app" />
      </DropDownMenu>
    );
  }
}
