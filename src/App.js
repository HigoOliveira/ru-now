import React from 'react'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as Colors from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    textColor: '#534847',
    backgroud: 'red',
    primary1Color: Colors.red500,
    primary2Color: Colors.red700,
    primary3Color: Colors.brown400,
    accent1Color: Colors.orange200,
    accent2Color: Colors.brown100,
    accent3Color: Colors.brown500,
    textColor: Colors.darkBlack,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.brown300,
    disabledColor: Colors.darkBlack,
    pickerHeaderColor: Colors.red500,
    clockCircleColor: Colors.darkBlack,
    shadowColor: Colors.fullBlack,
  }
});

const App = ({}) =>  {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <Router history={browserHistory} routes={routes} />
      </MuiThemeProvider>
    )
}

export default App
