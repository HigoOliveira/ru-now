import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {value: 1};
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <DropDownMenu value={this.state.value} onChange={this.handleChange}>
        <MenuItem value={1} primaryText="Restaurante Universitário"/>
        <MenuItem value={2} primaryText="Restaurante Multiuso"/>
        <MenuItem value={3} primaryText="Login/Cadastrar"/>
        <MenuItem value={4} primaryText="Sobre o App"/>
      </DropDownMenu>
    );
  }
}