import React, { Component } from 'react';
import Radium from 'radium';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import { browserHistory } from 'react-router'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import LineContainer from '../containers/LineContainer'
import { brown200, brown500 } from 'material-ui/styles/colors'

const styles = {
  container: {
    '@media (min-width: 992px)': {
       display: 'flex',
       width: '100%'
     },
  },
  lineBar: {
    width: '100%',
    background: brown200,
    position: 'fixed',
    '@media (min-width: 992px)': {
       background: brown500,
       width: '70%',
       position: 'static'
     },
  },
  dropBar: {
    paddingTop: 54,
    '@media (min-width: 992px)': {
       width: '30%',
       paddingTop: 0
     },
  }
}

class Menu extends Component {

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
      <div style={styles.container}>
        <div style={styles.lineBar}>
          <Toolbar>
            <LineContainer />
          </Toolbar>
        </div>
        <div style={styles.dropBar}>
          <Toolbar>
            <DropDownMenu value={this.state.value} onChange={this.handleChange}>
              <MenuItem value={'/ru'} primaryText="Restaurante Universitário"/>
              <MenuItem value={'/mu'} primaryText="Restaurante Espaço Multiuso"/>
              <MenuItem value={'login'} primaryText={loginText}/>
              <MenuItem value={'/about'} primaryText="Sobre o app" />
              {isLogged ? userInfo : <span></span>}
            </DropDownMenu>
          </Toolbar>
        </div>
      </div>
    );
  }
}

export default Radium(Menu)
